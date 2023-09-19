/* eslint-disable react/prop-types */
import {
    useState,
    useEffect,
    useRef,
} from 'react';

import './Scrollbar.scss';

const Scrollbar = ({ children }) => {
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