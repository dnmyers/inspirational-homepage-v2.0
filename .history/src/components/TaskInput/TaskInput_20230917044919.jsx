import { useState } from 'react';
import { addTask } from '../../features/Task/tasksSlice';

import './TaskInput.scss';

const TaskInput = () => {
    const [inputValue, setInputValue] = useState('');

    //

    return (
        <>
            <div className="task-input-container">
                <h1 className="task-input-header">What&apos;s on your mind today?</h1>
                <input
                    type="text"
                    placeholder="Add a task"

                />
            </div>
        </>
    );
};

export default TaskInput;