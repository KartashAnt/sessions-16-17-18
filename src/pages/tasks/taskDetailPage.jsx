import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

const TaskDetailPage = ({task}) => {
    const params=useParams();
    return (
        <div>
            <h1>Task: {params.id}</h1>
            <h2>Task Name: {task.name}</h2>
        </div>
    );
}
TaskDetailPage.propTypes={
    task:PropTypes.instanceOf(Task).isRequired
}

export default TaskDetailPage;
