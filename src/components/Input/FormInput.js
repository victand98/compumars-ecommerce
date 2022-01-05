import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import classNames from "classnames";
import get from "lodash/get";
import { FormErrorMessage, Input, Label } from "components";

export const FormInput = ({
  name,
  register,
  rules,
  errors,
  className,
  requiredSymbol,
  ...rest
}) => {
  const errorMessages = get(errors, name);
  const hasError = !!(errors && errorMessages);

  return (
    <div className={classNames("", className)} aria-live="polite">
      {rest.label && (
        <Label htmlFor={rest.id} requiredSymbol={requiredSymbol}>
          {rest.label}
        </Label>
      )}

      <Input
        name={name}
        aria-invalid={hasError}
        className={classNames({
          "transition-colors focus:outline-none focus:ring-1 focus:ring-opacity-50 border-red-600 hover:border-red-600 focus:border-red-600 focus:ring-red-600":
            hasError,
        })}
        {...rest}
        {...(register && register(name, rules))}
      />

      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <FormErrorMessage className="mt-1">{message}</FormErrorMessage>
        )}
      />
    </div>
  );
};
