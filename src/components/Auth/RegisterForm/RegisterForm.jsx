import { useFormik } from 'formik';
import { StyledButton, StyledForm, StyledHeading, StyledIcon } from './RegisterForm.styled';
import { useState } from 'react';
import { AuthField } from '../AuthField/AuthField';
import { validateRegisterForm } from 'helpers/authFieldValidation';
import { FiLogIn } from 'react-icons/fi';

export const RegisterForm = () => {

    const [emailValid, setEmailValid] = useState(null);
    const [passwordValid, setPasswordValid] = useState(null);
    const [nameValid, setNameValid] = useState(null);

    const onSubmitForm = async (/* name, email, password */ values) => {
        // валідація полів форми

        // false - 
        // підсвітити помилки
        // пуш повідомлення помилки

        // true
        // запис в глобальний стейт

        //редірект /calendar/month
        console.log(values);
        const validationResponse = await validateRegisterForm(values);
        setEmailValid(validationResponse.email.valid);
        setPasswordValid(validationResponse.password.valid);
        setNameValid(validationResponse.name.valid)
        console.log(validationResponse);

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
                <StyledIcon><FiLogIn size={15} color='#FFFFFF'/></StyledIcon>
            </StyledButton>
        </StyledForm>
    )
}