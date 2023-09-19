/* eslint-disable react/prop-types */
import {
    useState,
    useEffect,
    useRef,
    useCallback,
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
            ref.addEventListener('scroll', handleThumbPosition);

            return () => {
                observer.current?.unobserve(ref);
                ref.removeEventListener('scroll', handleThumbPosition);
            };
        }
    }, [handleThumbPosition]);

    const handleThumbPosition = useCallback(() => {
        if(
            !contentRef.current ||
            !scrollTrackRef.current ||
            !scrollThumbRef.current
        ) {
            return;
        }

        const { scrollTop: contentTop, scrollHeight: contentHeight } = contentRef.current;
        const { clientHeight: trackHeight } = scrollTrackRef.current;

        let newTop = (+contentTop / +contentHeight) * trackHeight;
        newTop = Math.min(newTop, trackHeight - thumbHeight);

        const thumb = scrollThumbRef.current;
        thumb.style.top = `${newTop}px`;
    }, [thumbHeight]);

    const handleScrollButton = (direction) => {
        const { current } = contentRef;

        if(current) {
            const scrollAmount = direction === 'down' ? 200 : -200;
            current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
        }
    }

    const handleTrackClick = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();

        const { trackCurrent } = scrollTrackRef;
        const { contentCurrent } = contentRef;

        if(trackCurrent && contentCurrent) {
            // First, figure out where we clicked
            const { clientY } = e;

            // Next, figure out the distance between the top of the track and the top of the viewport
            const target = e.target;
            const rect = target.getBoundingClientRect();
            const trackTop = rect.top;

            // We want the middle of the thumb to jump to where we clicked, so we subtract
            // half the thumb's height to offset the position
            const thumbOffset = -(thumbHeight / 2);

            // Find the ratio of the new position to the total content length using the thumb
        }
    });

    return (
        <div className='custom-scrollbars__container'>
            <div className='custom-scrollbars__content' ref={contentRef} {...props}>{children}</div>
            <div className='custom-scrollbars__scrollbar'>
                <button
                    className='custom-scrollbars__button'
                    onClick={() => handleScrollButton('up')}
                >
                    ⇑
                </button>
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
                <button
                    className='custom-scrollbars__button'
                    onClick={() => handleScrollButton('down')}
                >
                    ⇓
                </button>
            </div>
        </div>
    );
}

export default Scrollbar;