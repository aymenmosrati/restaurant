import * as Yup from "yup";

const emails = ["test@gmail.com", "admin@gmail.com"];

export const validateUser = Yup.object({
  // product: Yup.string().required("Please select a product").oneOf(products),
  email: Yup.string()
    .email("Invalid email format")
    .required("Please enter your email address")
    .oneOf(emails),
  password: Yup.string().min(8).required("Please enter your password"),
});
