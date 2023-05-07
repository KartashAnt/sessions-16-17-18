import React from 'react';
import TaskListComponent from '../../components/container/task_list';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

const TaskPage = ({taskList, setTasks}) => {
    return (
        <div>
            <TaskListComponent taskList={taskList} setTasksParent={setTasks}></TaskListComponent>
        </div>
    );
}
TaskPage.propTypes={
    taskList:PropTypes.arrayOf(PropTypes.instanceOf(Task)),
    setTasks:PropTypes.func
}
export default TaskPage;
