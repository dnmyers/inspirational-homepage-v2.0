/* eslint-disable react/prop-types */
import './Task.scss';

const Task = ({ task, backgroundColor }) => {
    return (
        <div className="task" style={{ backgroundColor: `${backgroundColor}98` }}>
            <div className="remove">
                <h6>Remove</h6>
            </div>
            <h5>{task.description}</h5>
        </div>
    );
}

export default Task;