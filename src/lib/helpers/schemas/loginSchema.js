import yup from "lib/helpers/validation";

const loginSchema = yup.object({
  email: yup.string().required().email().trim(),
  password: yup.string().required(),
});

export default loginSchema;
