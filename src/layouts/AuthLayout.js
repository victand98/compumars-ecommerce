import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <main className="max-w-md w-full space-y-8">{children}</main>
    </div>
  );
};

export default AuthLayout;
