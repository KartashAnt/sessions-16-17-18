import React, { useEffect, useState } from 'react';
import { Task } from '../../models/task.class';
import { Levels } from '../../models/levels.enums';
import TaskComponent from '../pure/task';
import '../../styles/task.scss';
import TaskForm from '../pure/forms/taskForm';
import TaskFormik from '../pure/forms/taskFormik';
import PropTypes from 'prop-types';

const TaskListComponent = ({taskList=null, setTasksParent=null}) => {
    if(taskList===null){
        const defaultTask=new Task("Example 1","Default description",false,Levels.NORMAL);
        const defaultTask2=new Task("Example 2","Default description",true,Levels.URGENT);
        const defaultTask3=new Task("Example 3","Default description",false,Levels.BLOCKING);
    
        taskList=[defaultTask, defaultTask2,defaultTask3];
    }
    const [tasks, setTasks] = useState(taskList);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        console.log("Task State has Been Modified");
        setTimeout(()=>setLoading(false),2000);
        
        return () => {
            console.log("TaskList Component is Going To unmount");
        };
    }, [tasks]);

    const completeTask=(task)=>{
        console.log("Complete the task: ", task);
        const index=tasks.indexOf(task);
        const tempTasks=[...tasks];
        tempTasks[index].completed=!tempTasks[index].completed;
        if(setTasksParent){
            setTasksParent(tempTasks)
        }
        else
            setTasks(tempTasks);
    }

    const deleteTask=(task)=>{
        console.log("Delete the task: ", task);
        const index=tasks.indexOf(task);
        const tempTasks=[...tasks];
        tempTasks.splice(index,1);
        if(setTasksParent!==null){
            setTasksParent(tempTasks)
        }
        else
            setTasks(tempTasks);
    }

    const addTask=(task)=>{
        console.log("Add task: ",task);
        const tempTasks=[...tasks];
        tempTasks.push(task);
        if(setTasksParent){
            setTasksParent(tempTasks)
        }
        setTasks(tempTasks);
    }
    
    const loadingStyle={
        color:"gray",
        fontSize:"30px",
        fontWeight:"bold"
    }
    const TaskTable=()=>(
        <table>
            <thead>
                <tr>
                    <th scope='col'>Title</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Priority</th>
                    <th scope='col'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    tasks.map((task,index)=>{
                        return(<TaskComponent   key={index} 
                                                task={task} 
                                                complete={completeTask}
                                                remove={deleteTask}
                                ></TaskComponent>);
                    })
                }
                
            </tbody>
        </table>)
    return (
        <div>
            <div className='col-12'>

                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your tasks:</h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true'  style={{ position:'relative', height:'400px'}}>
                        {loading?
                            //TODO: Add loading Spinner
                            <p style={loadingStyle}>Loading...</p>:
                            tasks.length>0 ?
                                <TaskTable></TaskTable>:
                                <h6>You have no tasks</h6>
                        }
                        
                    </div>
                </div>
                {/* <TaskForm add={addTask} numTasks={tasks.length}></TaskForm> */}
                <TaskFormik add={addTask} numTasks={tasks.length}></TaskFormik>
            </div>
            </div>
    );
}
TaskListComponent.propTypes={
    taskList:PropTypes.arrayOf(PropTypes.instanceOf(Task)),
    setTasksParent:PropTypes.func
}
export default TaskListComponent;
