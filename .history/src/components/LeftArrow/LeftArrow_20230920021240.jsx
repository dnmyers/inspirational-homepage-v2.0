/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './LeftArrow.scss';

const LeftArrow = (props) => {
    return (
        <motion.div
            className="previousArrow"
            onClick={props.onClick}
            whileHover={{
                scale: 1.2
            }}
            whileTap={{
                scale: 0.9
            }}
        >
            <FontAwesomeIcon icon={faArrowLeft} />
        </motion.div>
    );
}

export default LeftArrow;