import { Container, Row, Col } from 'react-grid-system';

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
            <div className="tasksContainer">
                <h3>Tasks</h3>
                <Task task={task} />
            </div>

        </>
    );
}

export default Tasks;