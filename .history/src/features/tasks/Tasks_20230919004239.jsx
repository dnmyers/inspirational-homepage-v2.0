import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';
import CustomScroller from 'react-custom-scroller';

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
                    <CustomScroller style={{ flexDirection: 'row' }}>
                    {
                        tasks.map((task) => {
                            return (
                                <Col key={task.id}>
                                    <Task task={task} />
                                </Col>
                            );
                        })
                    }
                    </CustomScroller>
                </Row>
            </Container>
            </div>

        </>
    );
}

export default Tasks;