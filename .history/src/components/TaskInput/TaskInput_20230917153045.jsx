import { useState } from 'react';
import { addTask } from '../../features/tasks/tasksSlice';
import { useDispatch } from 'react-redux';

import './TaskInput.scss';

const TaskInput = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    // IF enter key is pressed then addTask
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            dispatch(addTask(inputValue));
            setInputValue('');
        }
    };

    // On input change, update inputValue
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <>
            <div className="task-input-container">
                <h1 className="task-input-header">What&apos;s on your mind today?</h1>
                <input
                    type="text"
                    placeholder="Add a task"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </>
    );
};

export default TaskInput;