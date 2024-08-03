import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid e-mail").required("Email is required"),
    password: yup.string()
    .required("Password is required"),
})

