import React from 'react';
import LoginFormik from '../../components/pure/forms/loginFormik';
import { Link } from '@mui/material';

const LoginPage = ({setCredentials}) => {
    return (
        <div>
            <h1>Login Page</h1>
            <LoginFormik setCredentials={setCredentials}></LoginFormik>
            <Link href='/register'>I don't have an account</Link>
        </div>
    );
}

export default LoginPage;
