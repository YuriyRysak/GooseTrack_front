import { object, string, number, date, InferType } from 'yup';

export const registerSchema = object({
    name: string().required(),
    email: string().email(),
    password: string().required(),
});

export const loginSchema = object({
    name: string().required(),
    email: string().email(),
    password: string().required(),
});

export const validateRegisterForm = (dataObject) => {
    return registerSchema.isValid(dataObject)
}