import React, { forwardRef } from "react";
import classNames from "classnames";

export const Input = forwardRef(
  (
    { id, name, label, type = "text", className = "", placeholder, ...rest },
    ref
  ) => {
    return (
      <input
        id={id}
        ref={ref}
        name={name}
        type={type}
        aria-label={label || placeholder}
        placeholder={placeholder}
        autoComplete="off"
        className={classNames([
          "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
          className,
        ])}
        {...rest}
      />
    );
  }
);
