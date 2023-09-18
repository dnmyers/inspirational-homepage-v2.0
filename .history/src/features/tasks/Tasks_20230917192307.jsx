import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';

import { selectTasks } from '../tasks/tasksSlice';
import Task from '../../components/Task/Task';

import './Tasks.scss';

const Tasks = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);




    return (
        <>
            <div className="tasksContainer">
            <Container>
                <Row>
                    {
                        tasks.map((task, index) => {
                            return (
                                <Col key={task.id}>
                                    <Task task={task} backgroundColor={taskColors[index]} />
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