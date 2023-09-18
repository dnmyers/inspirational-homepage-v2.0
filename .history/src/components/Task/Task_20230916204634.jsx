/* eslint-disable react/prop-types */
import './Task.scss';

const Task = ({ task, backgroundColor }) => {
    return (
        <div className="task" style={{ backgroundColor: `${backgroundColor}98` }}>
            <div className="remove">
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