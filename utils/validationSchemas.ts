import * as Yup from "yup";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const registerSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().matches(emailRegex, "Invalid email").required("Required"),
  password: Yup.string().required("Required").min(7).max(7),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().matches(emailRegex, "Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export type RegisterFormData = Yup.InferType<typeof registerSchema>;
export type LoginFormData = Yup.InferType<typeof loginSchema>;
