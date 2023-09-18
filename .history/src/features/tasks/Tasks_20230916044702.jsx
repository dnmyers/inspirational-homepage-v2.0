import Task from '../../components/Task/Task';

import './Tasks.scss';

const Tasks = () => {
    const task = {
        id: 1,
        title: 'Task 1',
        description: 'Description 1',
        completed: false
    };

    return (
        <>
            <div className="tasks-container">
                <h1>Tasks</h1>
                <Task task={task} />
            </div>

        </>
    );
}

export default Tasks;