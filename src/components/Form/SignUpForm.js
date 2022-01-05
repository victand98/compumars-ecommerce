import React from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { AuthService } from "lib/api/services";
import { signUpSchema } from "lib/helpers/schemas";
import { useYupValidationResolver } from "lib/hooks";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { FormInput, IconButton, Link } from "components";

const SignUpForm = () => {
  const router = useRouter();
  const resolver = useYupValidationResolver(signUpSchema);
  const methods = useForm({ resolver });
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (formData) => {
    try {
      const { data } = await AuthService.register(formData);
      console.log(`DATA`, data);
      toast.success(data.message);
      router.push("/ingresar");
    } catch (error) {
      setError(
        error.additionalInfo.fields[0],
        { message: error.message },
        { shouldFocus: true }
      );
      console.log(`[ERROR]`, error);
    }
  };

  return (
    <form
      className="mt-8 space-y-6"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <FormInput
            id="firstName"
            type="text"
            name="firstName"
            placeholder="Nombres"
            className="mb-2"
            register={register}
            errors={errors}
          />
        </div>

        <div>
          <FormInput
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Apellidos"
            className="mb-2"
            register={register}
            errors={errors}
          />
        </div>

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

        <div>
          <FormInput
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            placeholder="Confirmar Contraseña"
            className="mb-2"
            register={register}
            errors={errors}
          />
        </div>
      </div>

      <div>
        <IconButton
          type="submit"
          icon={ArrowNarrowRightIcon}
          disabled={isSubmitting}
        >
          Registrarse
        </IconButton>
      </div>

      <div className="text-center text-sm text-grey-dark mt-4">
        Al registrarse, usted acepta los{" "}
        <Link
          className="no-underline border-b border-grey-dark text-grey-dark"
          href="#"
        >
          Términos de Servicio{" "}
        </Link>{" "}
        y la{" "}
        <Link
          className="no-underline border-b border-grey-dark text-grey-dark"
          href="#"
        >
          Política de Privacidad
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
