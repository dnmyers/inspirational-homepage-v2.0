/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, removeTask } from "../../features/tasks/tasksSlice";
import { motion } from "framer-motion";

import ConfettiExplosion from "react-confetti-explosion";

import "./Task.scss";

const Task = ({ task }) => {
    const [hover, setHover] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [isExploding, setIsExploding] = useState(false);

    // State to store generated background color
    const [taskColor, setTaskColor] = useState([]);

    const dispatch = useDispatch();

    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);

    const handleCompleted = () => {
        setCompleted(!completed);
        dispatch(toggleTask(task.id));
        if (!completed) {
            console.log(
                "🚀 ~ file: Task.jsx:29 ~ handleCompleted ~ completed:",
                completed
            );
            setIsExploding(true);
        } else {
            setIsExploding(false);
        }
    };

    // Function to generate a random background color
    const generateRandomColor = () => {
        const letters = "01234567489ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Call assignRandomColors when component mounts
    useEffect(() => {
        const assignRandomColor = () => {
            const color = generateRandomColor();
            setTaskColor(color);
        };

        assignRandomColor();
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
                {isExploding && <ConfettiExplosion force={1} width={100} height={'140vh'} />}
                {completed ? "Redo" : "Complete"}
            </motion.div>
            <h5>{task.text}</h5>
        </motion.div>
    );
};

export default Task;
