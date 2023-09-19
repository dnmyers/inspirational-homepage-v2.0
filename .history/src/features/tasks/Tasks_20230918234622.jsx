import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';

import { selectTasks } from '../tasks/tasksSlice';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import Task from '../../components/Task/Task';

import './Tasks.scss';

const Tasks = () => {
    const tasks = useSelector(selectTasks);

    return (
        <>
            <div className="tasksContainer">
            <Container>
                <Row>
                    <Scrollbar>
                        {
                            tasks.map((task) => {
                                return (
                                    <Col key={task.id}>
                                        <Task task={task} />
                                    </Col>
                                );
                            })
                        }
                    </Scrollbar>
                </Row>
            </Container>
            </div>

        </>
    );
}

export default Tasks;