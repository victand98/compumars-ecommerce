import React from "react";
import classNames from "classnames";

export const FormErrorMessage = ({ children, className }) => (
  <p className={classNames("text-xs text-left block text-red-600", className)}>
    {children}
  </p>
);
