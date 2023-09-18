/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, removeTask } from '../../features/tasks/tasksSlice';
import Confetti from 'react-confetti';

import './Task.scss';

const Task = ({ task, backgroundColor }) => {
    const [hover, setHover] = useState(false);

    const handleHover = () => {
        setHover(!hover);
    };


    return (
        <div className="task" style={{ backgroundColor: `${backgroundColor}98` }} onMouseOver={handleHover}>
            <div className="remove" style={{ visibility: hover ? "visible" : "hidden" }}>
                Remove
            </div>
            <div className="complete">
                Complete
            </div>
            <h5>{task.description}</h5>
        </div>
    );
}

export default Task;