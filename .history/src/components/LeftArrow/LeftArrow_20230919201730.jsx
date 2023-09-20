/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './LeftArrow.scss';

const LeftArrow = (props) => {
    return (
        <motion.button
            className="previousArrow"
            onClick={props.onClick}
            whileHover={{
                scale: 1.1
            }}
            whileTap={{
                scale: 0.95
            }}
        >
            <FontAwesomeIcon icon={faArrowLeft} />
        </motion.button>
    );
}

export default LeftArrow;