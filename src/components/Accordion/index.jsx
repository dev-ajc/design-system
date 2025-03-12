import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';


function Accordion({ title, content, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const accordionContentRef = useRef(null);

    // Add resize handler
    React.useEffect(() => {
        const updateHeight = () => {
            if (contentRef.current && isOpen) {
                contentRef.current.style.height = `${accordionContentRef.current.scrollHeight}px`;
            }
        };

        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, [isOpen]);

    const toggleAccordion = () => {
        if (contentRef.current) {
            const wrapper = contentRef.current;
            if (isOpen) {
                wrapper.style.height = '0px';
            } else {
                wrapper.style.height = `${wrapper.scrollHeight}px`;
            }
        }
        setIsOpen(!isOpen);
    };

    return (
        <div className="Accordion">
            <button 
                className="Accordion__header"
                onClick={toggleAccordion}
            >
                <strong>{title}</strong>
                <span className="Accordion__icon">
                    {isOpen ? '−' : '+'}
                </span>
            </button>
            <div 
                ref={contentRef}
                className="Accordion__content-wrapper"
                style={{ height: '0px' }}
            >
                <div
                    ref={accordionContentRef}
                    className="Accordion__content"
                >
                    {content && <>{content}</>}
                    {children && <>{children}</>}
                </div>
            </div>
        </div>
    );
}

Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node,
    children: PropTypes.node,
};

export default Accordion;
