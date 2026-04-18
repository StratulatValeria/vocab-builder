import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  name: Yup.string().required("Name is required").min(2, "Name is too short"),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format",
    )
    .required("Email is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Password must contain uppercase, lowercase and number",
    )
    .required("Password is required"),
});

export type RegisterFormData = Yup.InferType<typeof registerSchema>;
