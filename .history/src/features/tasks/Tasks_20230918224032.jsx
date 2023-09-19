import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';

import { selectTasks } from '../tasks/tasksSlice';
import Task from '../../components/Task/Task';

import './Tasks.scss';

const Tasks = () => {
    const tasks = useSelector(selectTasks);

    return (
        <>
            <div className="tasksContainer">
            <Container>
                <Row>
                    {
                        tasks.map((task) => {
                            return (
                                <Col key={task.id}>
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