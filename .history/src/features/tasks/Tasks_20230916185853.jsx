import { Container, Row, Col } from 'react-grid-system';

import Task from '../../components/Task/Task';

import './Tasks.scss';

const testTasks = [
    {
        id: 1,
        title: 'Task 1',
        description: 'Description 1',
        completed: false
    },
    {
        id: 2,
        title: 'Task 2',
        description: 'Description 2',
        completed: true
    },
    {
        id: 3,
        title: 'Task 3',
        description: 'Description 3',
        completed: false
    }
];

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
            <Container>
                <Row>
                    <Col xs={12}>
                        <h1>Tasks</h1>
                    </Col>
                </Row>
                <Row>
                    {
                        testTasks.map(task => {
                            return (
                                <Col xs={12} sm={6} md={4} lg={3} xl={2} key={task.id}>
                                    <Task task={task} />
                                </Col>
                            );
                        })
                    }
                </Row>
            </Container>
            </div>

        </>
    );
}

export default Tasks;