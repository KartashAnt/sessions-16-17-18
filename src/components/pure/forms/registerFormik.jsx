import React from 'react';
import { User } from '../../../models/user.class';

import * as Yup from 'yup';
import { ROLES } from '../../../models/roles.enum';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

const RegisterFormik = () => {
    const navigate=useNavigate();
    const initialValues={
        username:'',
        email:'',
        password:'',
        confirm:'',
        role:ROLES.USER
    }
    const registerSchema=Yup.object().shape(
        {
            username: Yup.string()
                .min(6,"Username too short")
                .max(12, "Username too long")
                .required("Username is required"),
            email: Yup.string()
                .email("Email format invalid")
                .required("Email is required"),
            role: Yup.string()
                .oneOf([ROLES.USER,ROLES.ADMIN],"Invalid Role")
                .required("Role is required"),
            password: Yup.string()
                .min(6,"Password too short")
                .required("Password is required"),
            confirm: Yup.string()
                .when("password",{
                    is: value=>(value && value.lenght >0),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        "Passwords must match!"
                    )
                }
                )
                .required("You must confirm your password")
        }
    )
    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async(values)=>{
                    alert(JSON.stringify(values,null,2))
                    await new Promise((r)=>setTimeout(r,1000));
                    navigate('/login')
                }}  
            >
                {
                    ({values,touched,errors,isSubmitting,handleChange,handleblur})=>(
                        <Form>

                            <Field id='username' type='text' name='username' placeholder='Your Username'></Field>
                            {
                                errors.username && touched.username &&
                                (
                                    <ErrorMessage name='username' component="div"/>
                                )
                            }
                            <label htmlFor='email'>Email:</label>
                            <Field id='email' type='email' name='email' placeholder='user@examle.com'></Field>
                            {
                                errors.email && touched.email &&
                                (
                                    <ErrorMessage name='email' component="div"/>
                                )
                            }
                            <label htmlFor='password'>Password:</label>
                            <Field id='password' type='password' name='password' placeholder=''></Field>
                            {
                                errors.password && touched.password &&
                                (
                                    <ErrorMessage name='password' component="div"/>
                                )
                            }
                            <label htmlFor='confirm'>Confirm Your Password:</label>
                            <Field id='confirm' type='password' name='confirm' placeholder=''></Field>
                            {
                                errors.confirm && touched.confirm &&
                                (
                                    <ErrorMessage name='confirm' component="div"/>
                                )
                            }
                            <button type="submit">Register Account</button>
                            {isSubmitting && <p>Creating your accout...</p>}
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
}

export default RegisterFormik;
