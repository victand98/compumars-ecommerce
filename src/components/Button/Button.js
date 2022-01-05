import React from "react";
import classNames from "classnames";

export const Button = ({ type = "button", children, disabled, ...rest }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={classNames(
        "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
        {
          "bg-indigo-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed":
            disabled,
        }
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export const IconButton = ({ children, icon: Icon, ...rest }) => {
  return (
    <Button {...rest}>
      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
        <Icon
          className={classNames(
            "h-5 w-5 text-indigo-500 group-hover:text-indigo-400",
            { "text-indigo-300": rest.disabled }
          )}
          aria-hidden="true"
        />
      </span>
      {children}
    </Button>
  );
};
