/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './LeftArrow.scss';

const LeftArrow = (props) => {
    return (
        <button className="previousArrow" onClick={props.onClick}>
            <FontAwesomeIcon icon={faArrowLeft} />
        </button>
    );
}

export default LeftArrow;