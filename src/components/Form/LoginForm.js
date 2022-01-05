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
import { currentRole, login } from "lib/features/auth/authSlice";
import { FormInput, IconButton } from "components";

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const resolver = useYupValidationResolver(loginSchema);
  const methods = useForm({ resolver });
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (formData) => {
    try {
      const { data } = await AuthService.login(formData);
      localStorage.setItem(LOCAL_STORAGE_ITEMS.ACCESS_TOKEN, data.accessToken);
      localStorage.setItem(
        LOCAL_STORAGE_ITEMS.REFRESH_TOKEN,
        data.refreshToken
      );
      dispatch(login(data.user));
      dispatch(currentRole());
      const returnUrl = router.query.returnUrl || "/perfil";
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
          <FormInput
            id="email"
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            className="mb-2"
            register={register}
            errors={errors}
          />
        </div>

        <div>
          <FormInput
            id="password"
            type="password"
            name="password"
            placeholder="Contraseña"
            className="mb-2"
            register={register}
            errors={errors}
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
            Recuerdame
          </label>
        </div>

        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </div>

      <div>
        <IconButton type="submit" icon={LockClosedIcon} disabled={isSubmitting}>
          Iniciar Sesión
        </IconButton>
      </div>
    </form>
  );
};

export default LoginForm;
