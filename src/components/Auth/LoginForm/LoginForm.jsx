import { useFormik } from 'formik';
import {
  StyledButton,
  StyledForm,
  StyledHeading,
  StyledIcon,
} from './LoginForm.styled';
import { useState } from 'react';
import { AuthField } from '../AuthField/AuthField';
import { validateLoginForm } from 'helpers';
import { FiLogIn } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [emailValid, setEmailValid] = useState();
  const [passwordValid, setPasswordValid] = useState();

  const onSubmitForm = async values => {
    // validation of inputs
    const validationResponse = await validateLoginForm(values);
    setEmailValid(validationResponse.email);
    setPasswordValid(validationResponse.password);
    await dispatch(logIn(values));

    // set loader true

    // API registration

    // set loader false

    // notificate API response

    // redirect /calendar/month
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    onSubmit: values => {
      onSubmitForm(values);
    },
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledHeading>Log in</StyledHeading>

      <AuthField
        name={'Email'}
        value={formik.values.email}
        type={'email'}
        onChange={formik.handleChange}
        valid={emailValid?.valid}
        placeholder="Enter email"
        errorMessage={emailValid?.error}
      />

      <AuthField
        name={'Password'}
        value={formik.values.password}
        type={'text'}
        onChange={formik.handleChange}
        valid={passwordValid?.valid}
        placeholder="Enter password"
        errorMessage={passwordValid?.error}
      />

      <StyledButton type="submit">
        Log in
        <StyledIcon>
          <FiLogIn size={17} color="#FFFFFF" />
        </StyledIcon>
      </StyledButton>
    </StyledForm>
  );
};
