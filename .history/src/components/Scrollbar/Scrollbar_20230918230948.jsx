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
    // height of the thumb and listen for scroll event to move the thumb
    useEffect(() => {
        if(contentRef.current && scrollTrackRef.current) {
            const ref = contentRef.current;
            const { clientHeight: trackSize } = scrollTrackRef.current;

            observer.current = new ResizeObserver(() => {
                handleResize(ref, trackSize);
            });

            observer.current.observe(ref);

            return () => {
                observer.current?.unobserve(ref);
            };
        }
    }, []);


    return (
        <div className='custom-scrollbars__container'>
            <div className='custom-scrollbars__content' ref={contentRef} {...props}>{children}</div>
            <div className='custom-scrollbars__scrollbar'>
                <button className='custom-scrollbars__button'>⇑</button>
                <div className='custom-scrollbars__track-and-thumb'>
                    <div className='custom-scrollbars__track'></div>
                    <div
                        className='custom-scrollbars__thumb'
                        ref={scrollThumbRef}
                        style={{
                            height: `${thumbHeight}px`,
                        }}
                    ></div>
                </div>
                <button className='custom-scrollbars__button'>⇓</button>
            </div>
        </div>
    );
}

export default Scrollbar;