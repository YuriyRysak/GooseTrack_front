import * as yup from 'yup';
import { patterns } from 'helpers/patterns';

const nameSchema = yup
  .string()
  .required()
  .matches(patterns.namePattern, patterns.emailPatternErrorMessage);

const emailSchema = yup
  .string()
  .required()
  .matches(patterns.emailPattern, patterns.emailPatternErrorMessage);

const passwordSchema = yup
  .string()
  .required()
  .matches(patterns.passwordPattern, patterns.passwordPatternErrorMessage);

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

export const validateRegisterForm = async ({ username, email, password }) => {
  const nameValidation = await validateField(username, nameSchema);
  const emailValidation = await validateField(email, emailSchema);
  const passwordValidation = await validateField(password, passwordSchema);
  return {
    username: nameValidation,
    email: emailValidation,
    password: passwordValidation,
  };
};

export const validateLoginForm = async ({ email, password }) => {
  const emailValidation = await validateField(email, emailSchema);
  const passwordValidation = await validateField(password, passwordSchema);
  return { email: emailValidation, password: passwordValidation };
};
