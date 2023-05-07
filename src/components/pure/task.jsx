import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { Levels } from '../../models/levels.enums';



const TaskComponent = ({task, complete, remove}) => {

    useEffect(() => {
        console.log("Task Modified");
        return () => {
            console.log(`Task ${task.name} will unmount`);
        };
    }, [task]);

    const taskLevelBadge=()=> {
        switch (task.level) {
            case Levels.NORMAL:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>
                )
            case Levels.URGENT:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>
                )
            case Levels.BLOCKING:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>
                )
        
            default:
                break;
        }
    }

    const taskCompletedIcon=()=>
        task.completed?
        (<i className='bi-toggle-on task-action' onClick={()=>complete(task)} style={{color:"green", fontWeight:'bold'}}></i>)
        :
        (<i className='bi-toggle-off task-action' onClick={()=>complete(task)} style={{color:'gray'}}></i>);

    return (
        
        <tr className={`fw-normal ${task.completed?"task-completed":"task-pending"}`}>
            <th>
                <span className='ms-2 task-name'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            
            <td className='align-middle'>
                {taskLevelBadge()}
            </td>
            
            <td className='align-middle'>
                {
                    taskCompletedIcon()
                }
                <i className='bi-trash' onClick={()=> remove(task)} style={{color:"tomato", fontSize:'20px'}}></i>
            </td>
        </tr>

    );
};


TaskComponent.propTypes = {
    task:PropTypes.instanceOf(Task).isRequired,
    complete:PropTypes.func.isRequired,
    remove:PropTypes.func.isRequired
};


export default TaskComponent;
