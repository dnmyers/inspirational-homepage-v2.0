/* eslint-disable react/prop-types */
import {
    useState,
    useEffect,
    useRef,
} from 'react';

import './Scrollbar.scss';

const Scrollbar = ({
    children,
    className,
    ...props
}) => {
    const contentRef = useRef(null);
    const scrollTrackRef = useRef(null);
    const scrollThumbRef = useRef(null);
    const observer = useRef(null);
    const [thumbHeight, setThumbHeight] = useState(20);

    const handleResize = (ref, trackSize) => {
        const { clientHeight, scrollHeight } = ref;
        setThumbHeight(Math.max((clientHeight / scrollHeight) * trackSize, 20));
    };

    // If the content and the scrollbar track exist, use a ResizeObserver to adjust


    return (
        <div className='custom-scrollbars__container'>
            <div className='custom-scrollbars__content'>{children}</div>
            <div className='custom-scrollbars__scrollbar'>
                <button className='custom-scrollbars__button'>⇑</button>
                <div className='custom-scrollbars__track-and-thumb'>
                    <div className='custom-scrollbars__track'></div>
                    <div className='custom-scrollbars__thumb'></div>
                </div>
                <button className='custom-scrollbars__button'>⇓</button>
            </div>
        </div>
    );
}

export default Scrollbar;