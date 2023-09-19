/* eslint-disable react/prop-types */
import './Scrollbar.scss';

const Scrollbar = ({ children }) => {
    return (
        <div className="custom-scrollbars__container">
            <div className="custom-scrollbars__content">
                {children}
            </div>
            <div className="custom-scrollbars__scrollbar">
                <button className="custom-scrollbars__button"></button>
            </div>
        </div>
    );
}

export default Scrollbar;