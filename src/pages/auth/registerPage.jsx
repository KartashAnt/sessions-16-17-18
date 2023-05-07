import React from 'react';
import RegisterFormik from '../../components/pure/forms/registerFormik';
import { Link } from '@mui/material';

const RegisterPage = () => {
    return (
        <div>
            <h1>Register Page</h1>
            <RegisterFormik></RegisterFormik>
            <Link href='/login'>I have an account</Link>
        </div>
    );
}

export default RegisterPage;
