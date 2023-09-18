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

    const whileHoverVariants = {
        enter: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
            }
        }
    }


    return (
        <div className="task" style={{ backgroundColor: `${backgroundColor}98` }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <motion.div
                className="remove"
                whileHover={{
                    scale: 1.1,
                    opacity: hover ? 1 : 0,
                    transition: {
                        duration: 0.3,
                    }
                }}
                style={{ visibility: hover ? "visible" : "hidden" }}
            >
                Remove
            </motion.div>
            <div className="complete" style={{ visibility: hover ? "visible" : "hidden" }}>
                Complete
            </div>
            <h5>{task.description}</h5>
        </div>
    );
}

export default Task;