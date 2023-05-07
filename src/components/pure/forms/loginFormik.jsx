import React from 'react';
import { Formik,Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginFormik = ({setCredentials}) => {
    const initialCredentials={
        email:'',
        password:''
    }
    const loginSchema=Yup.object().shape(
        {
            email: Yup.string().email("Email format invalid").required("Email is required"),
            password: Yup.string().required("Password is required")
        }
    )

    return (
        <div>
            <h4>Login Form</h4>
            <Formik
                initialValues={initialCredentials}
                validationSchema={loginSchema}
                onSubmit={async(values)=>{
                    await new Promise((r)=>setTimeout(r,500));
                    alert(JSON.stringify(values,null,2));
                    sessionStorage.setItem('credentials',values)
                    setCredentials(values)
                }}  
            
            >
            {
                    ({
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur
                    }) =>(
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field
                            id="email"
                            name="email"
                            placeholder="email@example.com"
                            type="email"
                            />
                            {
                                errors.email && touched.email && 
                                (
                                    <ErrorMessage name='email' component="div"></ErrorMessage>
                                )
                            }
                            <label htmlFor="password">Password</label>
                            <Field id="password" name="password" type="password" />
                            {
                                errors.password && touched.password && 
                                (
                                    <ErrorMessage name='password' component="div"></ErrorMessage>
                                )
                            }
                            <button type="submit">Submit</button>
                            {isSubmitting && <p>Loading your content...</p>}
                        </Form>
                    )
            }
            </Formik>
        </div>
    );
}

export default LoginFormik;
