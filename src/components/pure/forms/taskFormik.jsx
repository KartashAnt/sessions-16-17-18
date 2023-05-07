import React from 'react';
import PropTypes from 'prop-types';
import { Levels } from '../../../models/levels.enums';
import { Task } from '../../../models/task.class';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const TaskFormik = ({add,numTasks}) => {
    const initialValues={
        name:'',
        description:'',
        completed:false,
        level:Levels.NORMAL
    }
    const taskSchema=Yup.object().shape({
        name:Yup.string().required("Task Name is required"),
        description:Yup.string(),
        completed:Yup.bool(),
        level:Yup.string()
            .oneOf([Levels.NORMAL,Levels.URGENT,Levels.BLOCKING],"Level must take one of standard values")
            .required("level is required")
    })
    const addTask=(values)=>{
        const task=new Task(
            values.name,
            values.description,
            values.completed,
            values.level
        )
        add(task);
    }
    const normalStyle={
        color:"blue",
        fontWeight:"bold"
    }
    const urgentStyle={
        color:"yellow",
        fontWeight:"bold"
    }
    const bolckingStyle={
        color:"tomato",
        fontWeight:"bold"
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={taskSchema}
            onSubmit={addTask}
        >
            {
                ({values,touched,errors,isSubmitting,handleChange,handleblur})=>(
                        <Form  className='d-flex justify-content-center align-items-center mb-4'>
                            <div className='form-outline flex-fill'>
                                <Field id='name' type='text' name='name' placeholder='Task Name' className='form-control form-control-lg'></Field>
                                {
                                    errors.name && touched.name &&
                                    (
                                        <ErrorMessage name='name' component="span" className='text-muted text-error'/>
                                    )
                                }
                                <Field id='description' type='text' name='description' placeholder='Task Description' className='form-control form-control-lg'></Field>
                                {
                                    errors.description && touched.description &&
                                    (
                                        <ErrorMessage name='description' component="span" className='text-muted text-error'/>
                                    )
                                }
                                <Field as='select' id='level' name='level' className='form-control form-control-lg'>
                                    <option value={Levels.NORMAL} style={normalStyle}>Normal</option>
                                    <option value={Levels.URGENT} style={urgentStyle}>Urgent</option>
                                    <option value={Levels.BLOCKING} style={bolckingStyle}>Blocking</option>
                                </Field>
                                <button type='submit' className='btn btn-success btn-lg ms-2'>{numTasks>0?"Add":"Create"}</button>
                            </div>
                        </Form>
                    )
            }
        </Formik>
    );
}

TaskFormik.propTypes={
    add:PropTypes.func.isRequired,
    numTasks:PropTypes.number.isRequired
}


export default TaskFormik;
