import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const DEFAULT_BG_COLOR = '#555555';
const DEFAULT_INTERVAL = 3000;

const ErrorMessage = () => (
    <div className="ticker-error">No messages available</div>
);

const Ticker = ({ messages = [], interval = DEFAULT_INTERVAL }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, interval);
        return () => clearInterval(timer);
    }, [interval, messages.length]);

    if (!messages || messages.length === 0) {
        return <ErrorMessage />;
    }

    const goToNextMessage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    };

    const goToPrevMessage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + messages.length) % messages.length);
    };

    const currentBgColor = messages[currentIndex]?.bgColor || DEFAULT_BG_COLOR;

    return (
        <div className="ticker-container" style={{ background: currentBgColor }}>
            <button className="ticker-button" onClick={goToPrevMessage}>&#8592;</button>
            <div className="ticker-message">
                <p className="text-base mb-0">{messages[currentIndex]?.text || 'No Message Available'}</p>
            </div>
            <button className="ticker-button" onClick={goToNextMessage}>&#8594;</button>
        </div>
    );
};

Ticker.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            link: PropTypes.string,
            bgColor: PropTypes.string,
        })
    ).isRequired,
    interval: PropTypes.number,
};

export default Ticker;