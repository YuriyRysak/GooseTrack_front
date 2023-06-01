import { useFormik } from 'formik';
import { StyledButton, StyledForm, StyledHeading, StyledInput, StyledLabel } from './RegisterForm.styled';

export const RegisterForm = () => {

    const onSubmitForm = (name, email, password) => {
        // валідація полів форми

        // false - 
        // підсвітити помилки
        // пуш повідомлення помилки

        // true
        // запис в глобальний стейт

        //редірект /calendar/month
    };

    const formik = useFormik({
        initialValues: {
        name: '',
        password: '',
        email: '',
        },
        onSubmit: values => {
        onSubmitForm(values.name, values.email, values.password)
        },
    });

    return (
        <StyledForm onSubmit={formik.handleSubmit}>
            <StyledHeading>Sign up</StyledHeading>
            <StyledLabel htmlFor="name">Name</StyledLabel>
                <StyledInput
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder='Enter your name'
                />
            <StyledLabel htmlFor="email">Email</StyledLabel>
                <StyledInput
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder='Enter email'
                />
            <StyledLabel htmlFor="password">Password</StyledLabel>
                <StyledInput
                    id="password"
                    name="password"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder='Enter password'
                />
            <StyledButton type="submit">Sign up</StyledButton>
        </StyledForm>
    )
}