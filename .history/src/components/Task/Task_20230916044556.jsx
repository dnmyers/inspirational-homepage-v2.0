/* eslint-disable react/prop-types */
import './Task.scss';

const Task = ({ task }) => {
    return (
        <div className="task">
            <h5>{task.description}</h5>
        </div>
    );
}

export default Task;