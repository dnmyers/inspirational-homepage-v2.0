import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';

import { selectTasks } from '../tasks/tasksSlice';
import Task from '../../components/Task/Task';

import './Tasks.scss';

const Tasks = () => {
    // State to store generated background colors
    const [taskColors, setTaskColors] = useState([]);
    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);

    // Function to generate a random background color
    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Generate a random background color for each task

    // Call assignRandomColors when component mounts
    useEffect(() => {
        const assignRandomColors = () => {
            const colors = tasks.map(() => generateRandomColor());
            setTaskColors(colors);
        };

        assignRandomColors();
    }, [tasks]);


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