import yup from "lib/helpers/validation";

export const loginSchema = yup.object({
  email: yup.string().required().email().trim(),
  password: yup.string().required(),
});

export const signUpSchema = yup.object({
  firstName: yup.string().min(3).lettersOnly().required().trim(),
  lastName: yup.string().min(3).lettersOnly().required().trim(),
  email: yup.string().required().email().trim(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden."),
});
