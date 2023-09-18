/* eslint-disable react/prop-types */
import './Task.scss';

const Task = ({ task, backgroundColor }) => {
    return (
        <div className="task" style={{ backgroundColor: `${backgroundColor}88` }}>
            <h5>{task.description}</h5>
        </div>
    );
}

export default Task;