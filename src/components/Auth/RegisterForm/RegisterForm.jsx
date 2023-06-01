import { useFormik } from 'formik';
import { StyledForm } from './RegisterForm.styled';

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
        <label htmlFor="name">Name</label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder='Enter your name'
            />
        <label htmlFor="email">Email</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder='Enter email'
            />
        <label htmlFor="password">Password</label>
            <input
                id="password"
                name="password"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder='Enter password'
            />
        <button type="submit">Sign up</button>
     </StyledForm>
    )
}