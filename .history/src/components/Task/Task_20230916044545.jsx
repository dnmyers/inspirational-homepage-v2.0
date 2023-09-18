/* eslint-disable react/prop-types */
import './Task.scss';

const Task = ({ task }) => {
    return (
        <div className="task">
            <h3>{task.description}</h3>
        </div>
    );
}

export default Task;