import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';

import { selectTasks } from '../tasks/tasksSlice';
import Task from '../../components/Task/Task';

import './Tasks.scss';

// const testTasks = [
//     {
//         id: 1,
//         title: 'Task 1',
//         description: 'Description 1',
//         completed: false
//     },
//     {
//         id: 2,
//         title: 'Task 2',
//         description: 'Description 2',
//         completed: true
//     },
//     {
//         id: 3,
//         title: 'Task 3',
//         description: 'Description 3',
//         completed: false
//     },
//     {
//         id: 4,
//         title: 'Task 4',
//         description: 'Description 4',
//         completed: false
//     },
//     {
//         id: 5,
//         title: 'Task 5',
//         description: 'Description 5',
//         completed: true
//     },
//     {
//         id: 6,
//         title: 'Task 6',
//         description: 'Description 6',
//         completed: false
//     },

// ];

const Tasks = (props) => {
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
    const assignRandomColors = () => {
        const colors = testTasks.map(() => generateRandomColor());
        setTaskColors(colors);
    };

    // Call assignRandomColors when component mounts
    useEffect(() => {
        assignRandomColors();
    }, []);


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