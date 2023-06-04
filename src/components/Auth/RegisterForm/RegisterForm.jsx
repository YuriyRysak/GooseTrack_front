import { useFormik } from 'formik';
import { StyledButton, StyledForm, StyledHeading, StyledIcon } from './RegisterForm.styled';
import { useState } from 'react';
import { AuthField } from '../AuthField/AuthField';
import { validateRegisterForm } from 'helpers/authFieldValidation';
import { FiLogIn } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../redux/auth/operations';
import { selectIsLoggedInUser } from '../../../redux/auth/selectors';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);
  const [usernameValid, setUsernameValid] = useState(null);

  const isLoggedIn = useSelector(selectIsLoggedInUser);

  const onSubmitForm = async (values) => {
    try {
      // validation of inputs
      const validationResponse = await validateRegisterForm(values);
      setEmailValid(validationResponse.email.valid);
      setPasswordValid(validationResponse.password.valid);
      setUsernameValid(validationResponse.username.valid);

      await dispatch(register(values)); //================

      if (isLoggedIn) {
        formik.resetForm();
      }
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
        name={'username'}
        lableName={'Name'}
        value={formik.values.username}
        type={'text'}
        onChange={formik.handleChange}
        valid={usernameValid?.valid}
        placeholder='Enter your name'
        errorMessage={usernameValid?.error}
      />

      <AuthField
        name={'Email'}
        lableName={'Email'}
        value={formik.values.email}
        type={'email'}
        onChange={formik.handleChange}
        valid={emailValid?.valid}
        placeholder='Enter email'
        errorMessage={emailValid?.error}
      />

      <AuthField
        name={'Password'}
        lableName={'Password'}
        value={formik.values.password}
        type={'text'}
        onChange={e => {
          formik.handleChange(e);
          setPasswordValid(null);
        }}
        valid={passwordValid?.valid}
        placeholder='Enter password'
        errorMessage={passwordValid?.error}
      />

      <StyledButton type='submit'>
        Sign up
        <StyledIcon><FiLogIn size={17} color='#FFFFFF' /></StyledIcon>
      </StyledButton>

    </StyledForm>
  );
};
