/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './RightArrow.scss';

const RightArrow = (props) => {
    return (
        <motion.div
            className="nextArrow"
            onClick={props.onClick}
            whileHover={{
                scale: 1.2
            }}
            whileTap={{
                scale: 0.9
            }}
        >
            <FontAwesomeIcon icon={faArrowRight} />
        </motion.div>
    );
}

export default RightArrow;