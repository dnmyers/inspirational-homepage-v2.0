import { TaskInput } from '../TaskInput/TaskInput';
import { Tasks } from '../Tasks/Tasks';

const TasksContainer = () => {
    return (
        <div className="tasks-container">
            <TaskInput />
            <Tasks />
        </div>
    );
}

export default TasksContainer;