/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './RightArrow.scss';

const RightArrow = (props) => {
    return (
        <button className="nextArrow" onClick={props.onClick}>
            <FontAwesomeIcon icon={faArrowRight} />
        </button>
    );
}

export default RightArrow;