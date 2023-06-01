import { useFormik } from 'formik';
import { StyledButton, StyledForm, StyledHeading, StyledInput, StyledLabel } from './RegisterForm.styled';
import { registerSchema, validateRegisterForm } from 'helpers/registerValidation';
import { useState } from 'react';

export const RegisterForm = () => {

    const [emailValid] = useState(true);
    const [passwordValid] = useState(false);
    const [nameValid] = useState();

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
            <StyledLabel htmlFor="name" valid={nameValid}>Name</StyledLabel>
                <StyledInput
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder='Enter your name'
                    valid={nameValid}
                />
            <StyledLabel htmlFor="email" valid={emailValid}>Email</StyledLabel>
                <StyledInput
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder='Enter email'
                    valid={emailValid}
                />
            <StyledLabel htmlFor="password" valid={passwordValid}>Password</StyledLabel>
                <StyledInput
                    id="password"
                    name="password"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder='Enter password'
                    valid={passwordValid}
                />
            <StyledButton type="submit">Sign up</StyledButton>
        </StyledForm>
    )
}