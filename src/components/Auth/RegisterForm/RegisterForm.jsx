import { useFormik } from 'formik';
import { StyledButton, StyledForm, StyledHeading, StyledIcon, StyledLink } from './RegisterForm.styled';
import { useState } from 'react';
import { AuthField } from '../AuthField/AuthField';
import { validateRegisterForm } from 'helpers/authFieldValidation';
import { FiLogIn } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {

    const [emailValid, setEmailValid] = useState(null);
    const [passwordValid, setPasswordValid] = useState(null);
    const [nameValid, setNameValid] = useState(null);

    const onSubmitForm = async (values) => {
        // validation of inputs
        const validationResponse = await validateRegisterForm(values);
        setEmailValid(validationResponse.email.valid);
        setPasswordValid(validationResponse.password.valid);
        setNameValid(validationResponse.name.valid);

        // set loader true

        // API registration

        // set loader false

        // notificate API response

        // redirect /calendar/month
    };

    const formik = useFormik({
        initialValues: {
        name: '',
        password: '',
        email: '',
        },
        onSubmit: values => {
        onSubmitForm(values)
        }
    });

    const navigate = useNavigate();
    const redirect = () => {
        console.log('redirect');
        navigate("/register", { replace: true });
    };

    return (
        <StyledForm onSubmit={formik.handleSubmit}>
            <StyledHeading>Sign up</StyledHeading>


            <AuthField 
                name={'Name'}
                value={formik.values.name}
                type={'text'}
                onChange={formik.handleChange}
                valid={nameValid}
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

            <StyledButton type="submit">
                Sign up
                <StyledIcon><FiLogIn size={17} color='#FFFFFF'/></StyledIcon>
            </StyledButton>
            <StyledLink onClick={redirect}>Log in</StyledLink>
        </StyledForm>
    )
}