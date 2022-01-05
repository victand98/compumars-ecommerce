import React from "react";
import { Link, SignUpForm } from "components";
import { AuthLayout } from "layouts";

const SignUp = () => {
  return (
    <>
      <div>
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Registra tu nueva cuenta
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          ¿Ya tienes una cuenta?{" "}
          <Link
            href="/ingresar"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Ingresa aquí
          </Link>
        </p>
      </div>

      <SignUpForm />
    </>
  );
};

SignUp.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default SignUp;
