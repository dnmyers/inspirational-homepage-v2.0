/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, removeTask } from '../../features/tasks/tasksSlice';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';

import './Task.scss';

const Task = ({ task }) => {
    const [hover, setHover] = useState(false);
    const [completed, setCompleted] = useState(false);

    // State to store generated background color
    const [taskColor, setTaskColor] = useState([]);

    const dispatch = useDispatch();

    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);

    const handleCompleted = () => {
        setCompleted(!completed);
        dispatch(toggleTask(task.id));
    };

    // Function to generate a random background color
    const generateRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Call assignRandomColors when component mounts
    useEffect(() => {
        const assignRandomColors = () => {
            const color = generateRandomColor();
            setTaskColor(color);
        };

        assignRandomColors();
    }, []);

    return (
        <motion.div
            className='task'
            whileHover={{ scale: 1.1 }}
            style={{
                backgroundColor: task.completed
                    ? `${taskColor}33`
                    : `${taskColor}CC`,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className='remove'
                whileHover={{ scale: 1.1 }}
                style={{ visibility: hover ? "visible" : "hidden" }}
                onClick={() => dispatch(removeTask(task.id))}
            >
                Remove
            </motion.div>
            <motion.div
                className='complete'
                whileHover={{ scale: 1.1 }}
                style={{ visibility: hover ? "visible" : "hidden" }}
                onClick={handleCompleted}
            >
                {completed ? "Redo" : "Complete"}
            </motion.div>
            <h5>{task.text}</h5>
        </motion.div>
    );
}

export default Task;