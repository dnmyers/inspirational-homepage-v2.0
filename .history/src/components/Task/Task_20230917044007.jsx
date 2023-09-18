/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, removeTask } from '../../features/tasks/tasksSlice';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';

import './Task.scss';

const Task = ({ task, backgroundColor }) => {
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);

    return (
        <motion.div
            className="task"
            whileHover={{ scale: 1.1 }}
            style={{ backgroundColor: `${backgroundColor}98` }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="remove"
                whileHover={{ scale: 1.1 }}
                style={{ visibility: hover ? "visible" : "hidden" }}
            >
                Remove
            </motion.div>
            <motion.div
                className="complete"
                whileHover={{ scale: 1.1 }}
                style={{ visibility: hover ? "visible" : "hidden" }}
            >
                Complete
            </motion.div>
            <h5>{task.description}</h5>
        </motion.div>
    );
}

export default Task;