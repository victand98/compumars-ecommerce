import React from "react";
import { Link, LoginForm } from "components";
import { AuthLayout } from "layouts";

const Login = () => {
  return (
    <>
      <div>
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Ingresa a tu cuenta
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          O{" "}
          <Link
            href="/registro"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            regístrate ahora mismo
          </Link>
        </p>
      </div>

      <LoginForm />
    </>
  );
};

Login.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default Login;
