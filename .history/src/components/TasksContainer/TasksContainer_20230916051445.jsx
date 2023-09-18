import TaskInput from '../TaskInput/TaskInput';
import Tasks from '../../features/tasks/Tasks';

const TasksContainer = () => {
    return (
        <div className="tasks-container">
            <TaskInput />
            <Tasks />
        </div>
    );
}

export default TasksContainer;