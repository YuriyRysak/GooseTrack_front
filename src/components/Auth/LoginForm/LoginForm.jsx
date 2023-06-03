import { useFormik } from 'formik';
import {
  StyledButton,
  StyledForm,
  StyledHeading,
  StyledIcon,
  StyledLink,
} from './LoginForm.styled';
import { useState } from 'react';
import { AuthField } from '../AuthField/AuthField';
import { validateLoginForm } from 'helpers';
import { FiLogIn } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { ThemeToggler } from 'components/User';
import { AddTaskBtn, AuthLink } from 'utils/Buttons/MainButton.styled';

export const LoginForm = () => {
  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);

  const onSubmitForm = async values => {
    // validation of inputs
    const validationResponse = await validateLoginForm(values);
    setEmailValid(validationResponse.email.valid);
    setPasswordValid(validationResponse.password.valid);

    // set loader true

    // API registration

    // set loader false

    // notificate API response

    // redirect /calendar/month
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

  const navigate = useNavigate();
  const redirect = () => {
    console.log('redirect');
    navigate('/register', { replace: true });
  };

  return (
    <>
      <ThemeToggler />
      {/* <StyledForm onSubmit={formik.handleSubmit}>
        <StyledHeading>Log in</StyledHeading>

        <AuthField
          name={'Email'}
          value={formik.values.email}
          type={'email'}
          onChange={formik.handleChange}
          valid={emailValid}
          placeholder="Enter email"
        />

        <AuthField
          name={'Password'}
          value={formik.values.password}
          type={'text'}
          onChange={formik.handleChange}
          valid={passwordValid}
          placeholder="Enter password"
        />

        <StyledButton type="submit">
          Log in
          <StyledIcon>
            <FiLogIn size={17} color="#FFFFFF" />
          </StyledIcon>
        </StyledButton>

        <StyledLink onClick={redirect}>Sign up</StyledLink>
        <AddTaskBtn style={{ width: '100%' }}>
          <FiLogIn style={{ marginLeft: 11, width: 24, height: 24 }} />
          Add task
        </AddTaskBtn>
      </StyledForm> */}
    </>
  );
};
