import { useFormik } from 'formik';
import { StyledButton, StyledForm, StyledHeading } from './RegisterForm.styled';
import { registerSchema, validateRegisterForm } from 'helpers/registerValidation';
import { useState } from 'react';
import { AuthField } from '../AuthField/AuthField';

export const RegisterForm = () => {

    const [emailValid] = useState(true);
    const [passwordValid] = useState(false);
    const [nameValid] = useState(null);

    const onSubmitForm = async (/* name, email, password */ values) => {
        // валідація полів форми

        // false - 
        // підсвітити помилки
        // пуш повідомлення помилки

        // true
        // запис в глобальний стейт

        //редірект /calendar/month
        console.log(values);
        const smth = await validateRegisterForm(values);
        console.log(smth);
    };

    const formik = useFormik({
        initialValues: {
        name: '',
        password: '',
        email: '',
        },
        onSubmit: values => {
        //onSubmitForm(values.name, values.email, values.password)
        onSubmitForm(values)
        },
        validationSchema: registerSchema
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

            <StyledButton type="submit">Sign up</StyledButton>
        </StyledForm>
    )
}