import { useFormik } from 'formik';
import { StyledButton, StyledForm, StyledHeading, StyledIcon } from './RegisterForm.styled';
import { useState } from 'react';
import { AuthField } from '../AuthField/AuthField';
import { validateRegisterForm } from 'helpers/authFieldValidation';
import { FiLogIn } from 'react-icons/fi';

export const RegisterForm = () => {

    const [emailValid, setEmailValid] = useState();
    const [passwordValid, setPasswordValid] = useState();
    const [nameValid, setNameValid] = useState();

    const onSubmitForm = async (values) => {
        // validation of inputs
        const validationResponse = await validateRegisterForm(values);
        setEmailValid(validationResponse.email);
        setPasswordValid(validationResponse.password);
        setNameValid(validationResponse.name);

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

    return (
        <StyledForm onSubmit={formik.handleSubmit}>
            <StyledHeading>Sign up</StyledHeading>


            <AuthField 
                name={'Name'}
                value={formik.values.name}
                type={'text'}
                onChange={formik.handleChange}
                valid={nameValid?.valid}
                placeholder='Enter your name'
                errorMessage={nameValid?.error}
            />

            <AuthField 
                name={'Email'}
                value={formik.values.email}
                type={'email'}
                onChange={formik.handleChange}
                valid={emailValid?.valid}
                placeholder='Enter email'
                errorMessage={emailValid?.error}
            />

            <AuthField 
                name={'Password'}
                value={formik.values.password}
                type={'text'}
                onChange={formik.handleChange}
                valid={passwordValid?.valid}
                placeholder='Enter password'
                errorMessage={passwordValid?.error}
            />

            <StyledButton type="submit">
                Sign up
                <StyledIcon><FiLogIn size={17} color='#FFFFFF'/></StyledIcon>
            </StyledButton>
            
        </StyledForm>
    )
}