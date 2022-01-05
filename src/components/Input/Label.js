import React from "react";
import classNames from "classnames";

export const Label = ({
  children,
  className,
  htmlFor,
  requiredSymbol,
  ...rest
}) => {
  return (
    <label
      className={classNames(
        {
          "after:content-['*'] after:ml-0.5 after:text-red-500": requiredSymbol,
        },
        [
          "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
          className,
        ]
      )}
      htmlFor={htmlFor}
      {...rest}
    >
      {children}
    </label>
  );
};
