import { useFormik } from 'formik';
import { StyledButton, StyledForm, StyledHeading, StyledIcon } from './RegisterForm.styled';
import { useState } from 'react';
import { AuthField } from '../AuthField/AuthField';
import { validateRegisterForm } from 'helpers/authFieldValidation';
import { FiLogIn } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);
  const [usernameValid, setUsernameValid] = useState(null);

  const onSubmitForm = async (values) => {
    try {
      // validation of inputs
      const validationResponse = await validateRegisterForm(values);
      setEmailValid(validationResponse.email.valid);
      setPasswordValid(validationResponse.password.valid);
      setUsernameValid(validationResponse.username.valid);

  await dispatch(register(values));

      // set loader true

      // API registration

      // set loader false

      // notificate API response

      // redirect /calendar/month
      formik.resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
    },
    onSubmit: values => {
      onSubmitForm(values);
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledHeading>Sign up</StyledHeading>


      <AuthField
        name={'Username'}
        value={formik.values.username}
        type={'text'}
        onChange={formik.handleChange}
        valid={usernameValid}
        placeholder='Enter your name'
      />

      <AuthField
        name={'Email'}
        value={formik.values.email}
        type={'email'}
        onChange={formik.handleChange}
        valid={emailValid}
        placeholder='Enter email'
      />

      <AuthField
        name={'Password'}
        value={formik.values.password}
        type={'text'}
        onChange={formik.handleChange}
        valid={passwordValid}
        placeholder='Enter password'
      />

      <StyledButton type='submit'>
        Sign up
        <StyledIcon><FiLogIn size={17} color='#FFFFFF' /></StyledIcon>
      </StyledButton>

    </StyledForm>
  );
};
