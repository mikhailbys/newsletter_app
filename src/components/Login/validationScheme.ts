import * as yup from "yup";

export const loginSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Required'),
    password: yup
        .string()
        .trim()
        .required()
});