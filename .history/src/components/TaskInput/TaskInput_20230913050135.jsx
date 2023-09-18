import './TaskInput.scss';

const TaskInput = () => {
    return (
        <>
            <div className="task-input-container">
                <h1 className="task-input-header">What&apos;s on your mind today?</h1>
                <input type="text" placeholder="Add a task" />
            </div>
        </>
    );
};

export default TaskInput;
