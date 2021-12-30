import useSWR from "swr";

const fetcher = (url) => axios.post(url).then((res) => res.data);

const useLogin = (data) => {
  const { data, error } = useSWR(`/api/user/${id}`, fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useLogin;
