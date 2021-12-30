import React from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { AuthService } from "lib/api/services";
import { LOCAL_STORAGE_ITEMS } from "lib/helpers/constants";
import { loginSchema } from "lib/helpers/schemas";
import { useYupValidationResolver } from "lib/hooks";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useAppDispatch } from "lib/app/hooks";
import { login } from "lib/features/auth/authSlice";

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const resolver = useYupValidationResolver(loginSchema);
  const methods = useForm({ resolver });
  const { handleSubmit, register } = methods;

  const onSubmit = async (formData) => {
    try {
      const { data } = await AuthService.login(formData);
      localStorage.setItem(LOCAL_STORAGE_ITEMS.ACCESS_TOKEN, data.accessToken);
      localStorage.setItem(
        LOCAL_STORAGE_ITEMS.REFRESH_TOKEN,
        data.refreshToken
      );
      dispatch(login(data.user));
      const returnUrl = router.query.returnUrl || "/panel";
      router.push(returnUrl);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form
      className="mt-8 space-y-6"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            {...register("email")}
            type="email"
            autoComplete="email"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            {...register("password")}
            type="password"
            autoComplete="current-password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900"
          >
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <LockClosedIcon
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true"
            />
          </span>
          Sign in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
