import * as yup from 'yup';

import { patterns } from 'helpers/patterns';

// const nameRegex = /^[\p{L}\s]+$/u;
// const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// const passwordRegex = /^.*(?=.{6,})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

const nameSchema = yup
  .string()
  .min(1, 'min 1')
  .max(15)
  .required()
  .matches(patterns.namePattern);

const emailSchema = yup
  .string()
  .email()
  .matches(patterns.emailPattern)
  .required();

const passwordSchema = yup
  .string()
  .required()
  .min(6)
  .max(16)
  .matches(patterns.passwordPattern);

const validateField = async (value, schema) => {
  let isValid;
  let firstError;
  await schema
    .validate(value)
    .then(() => (isValid = true))
    .catch(error => {
      isValid = false;
      firstError = error.message;
    });
  return { valid: isValid, error: firstError };
};

export const validateRegisterForm = async ({ name, email, password }) => {
  const nameValidation = await validateField(name, nameSchema);
  const emailValidation = await validateField(email, emailSchema);
  const passwordValidation = await validateField(password, passwordSchema);
  return {
    name: nameValidation,
    email: emailValidation,
    password: passwordValidation,
  };
};

export const validateLoginForm = async ({ email, password }) => {
  const emailValidation = await validateField(email, emailSchema);
  const passwordValidation = await validateField(password, passwordSchema);
  return { email: emailValidation, password: passwordValidation };
};
