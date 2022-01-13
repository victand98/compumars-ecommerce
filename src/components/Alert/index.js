import classNames from "classnames";
import React, { useState } from "react";

export const Alert = ({ children, color, icon: Icon }) => {
  const [showAlert, setShowAlert] = useState(true);

  const alertClass = classNames(`flex p-4 mb-4 rounded-lg`, {
    "text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800":
      color === "info",
    "text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800":
      color === "danger",
    "text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800":
      color === "success",
    "text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800":
      color === "warning",
  });

  const buttonClass = classNames(
    "ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8",
    {
      "text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300":
        color === "info",
      "text-red-500 focus:ring-red-400 hover:bg-red-200 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300":
        color === "danger",
      "text-green-500 focus:ring-green-400 hover:bg-green-200 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300":
        color === "success",
      "text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300":
        color === "warning",
    }
  );

  return (
    <>
      {showAlert ? (
        <div className={alertClass} role="alert">
          {Icon && <Icon className="flex-shrink-0 w-5 h-5" />}

          <span className="ml-3 text-sm font-medium">{children}</span>

          <button className={buttonClass} onClick={() => setShowAlert(false)}>
            <span className="sr-only">Close</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      ) : null}
    </>
  );
};
