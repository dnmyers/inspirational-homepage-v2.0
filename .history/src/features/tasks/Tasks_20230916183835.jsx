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
            <Container>
                <Row>
                    <Col xs={12}>
                        <h1>Tasks</h1>
                    </Col>
                </Row>
                <Row direction="row" className="tasks-row">
                    <Col>
                        <Task task={task} />
                    </Col>
                    <Col>
                        <Task task={task} />
                    </Col>
                    <Col>
                        <Task task={task} />
                    </Col>
                    <Col>
                        <Task task={task} />
                    </Col>
                    <Col>
                        <Task task={task} />
                    </Col>
                    <Col>
                        <Task task={task} />
                    </Col>
                    <Col>
                        <Task task={task} />
                    </Col>
                </Row>
            </Container>
            </div>

        </>
    );
}

export default Tasks;