import { useState } from 'react';
import { addTask } from '../../features/tasks/tasksSlice';

import './TaskInput.scss';

const TaskInput = () => {
    const [inputValue, setInputValue] = useState('');

    // IF enter key is pressed then addTask
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addTask(inputValue);
            setInputValue('');
        }
    };

    return (
        <>
            <div className="task-input-container">
                <h1 className="task-input-header">What&apos;s on your mind today?</h1>
                <input
                    type="text"
                    placeholder="Add a task"
                    value={inputValue}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </>
    );
};

export default TaskInput;