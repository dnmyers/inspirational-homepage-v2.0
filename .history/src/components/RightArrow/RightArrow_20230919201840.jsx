/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './RightArrow.scss';

const RightArrow = (props) => {
    return (
        <motion.button
            className="nextArrow"
            onClick={props.onClick}
            whileHover={{
                scale: 1.1
            }}
            whileTap={{
                scale: 0.95
            }}
        >
            <FontAwesomeIcon icon={faArrowRight} />
        </motion.button>
    );
}

export default RightArrow;