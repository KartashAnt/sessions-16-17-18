import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Levels } from '../../../models/levels.enums';
import { Task } from '../../../models/task.class';

const TaskForm = ({add, numTasks}) => {

    const nameRef = useRef();
    const descriptionRef= useRef();
    const levelRef=useRef(Levels.NORMAL);

    const addTask=(e)=>{
        e.preventDefault();
        const task=new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
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
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' placeholder='Task Name' required autoFocus/>
                <input ref={descriptionRef} id='descriptionName' type='text' className='form-control form-control-lg' placeholder='Task Description' required/>
                <select ref={levelRef} defaultValue={Levels.NORMAL} id='selectLevel' className='form-control form-control-lg'>
                    <option value={Levels.NORMAL} style={normalStyle}>Normal</option>
                    <option value={Levels.URGENT} style={urgentStyle}>Urgent</option>
                    <option value={Levels.BLOCKING} style={bolckingStyle}>Blocking</option>
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-2'>{numTasks>0?"Add":"Create"}</button>
            </div>
        </form>
    );
}

TaskForm.propTypes={
    add:PropTypes.func.isRequired,
    numTasks:PropTypes.number.isRequired
}

export default TaskForm;
