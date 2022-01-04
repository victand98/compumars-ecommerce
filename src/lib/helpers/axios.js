import axios from "axios";
import { AuthService } from "lib/api/services";
import { API_COMPUMARS_URI, LOCAL_STORAGE_ITEMS } from "lib/helpers/constants";
import store from "lib/app/store";
import { logout } from "lib/features/auth/authSlice";
import { toast } from "react-toastify";

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: API_COMPUMARS_URI,
});

const requestHandler = (request) => {
  const ACCESS_TOKEN = localStorage.getItem(LOCAL_STORAGE_ITEMS.ACCESS_TOKEN);
  if (ACCESS_TOKEN) request.headers["Authorization"] = `Bearer ${ACCESS_TOKEN}`;
  return request;
};

const responseHandler = (response) => {
  console.log(`[RESPONSE]\n`, response);
  return response;
};

const errorHandler = async (error) => {
  console.log(`[ERROR]\n`, error.toJSON());
  if (error.response) {
    const { data, status } = error.response;
    const originalRequest = error.config;

    if (!data.message && status === 404)
      return Promise.reject({
        message: "Ha ocurrido un error y no se ha podido encontrar el recurso.",
      });

    // Refresh the access token using the refresh token provided.
    if (status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const accessToken = await AuthService.refreshToken();
      instance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${accessToken}`;
      return instance(originalRequest);
    }

    // Terminate user session because the server gave a 401 status code
    if (status === 401) {
      toast.error(data.message);
      store.dispatch(logout());
    }
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log("ERROR.RESPONSE.DATA", error.response.data);
    console.log("ERROR.RESPONSE.STATUS", error.response.status);

    return Promise.reject(data);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log("ERROR.REQUEST", error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("ERROR.MESSAGE", error.message);
  }
  console.log("ERROR.config", error.config);

  return Promise.reject(error);
};

instance.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

instance.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default instance;
