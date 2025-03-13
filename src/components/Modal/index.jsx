import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Modal = ({
    isOpen,
    onClose,
    title,
    children,
    size = 'medium',
    closeOnBackdropClick = true,
    showCloseButton = true,
    footer,
    className,
    ...props
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const modalRef = useRef(null);

    // Handle modal animation and focus management
    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.classList.add('modal-open');
            
            // Focus trap inside modal
            const focusableElements = modalRef.current?.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            
            if (focusableElements && focusableElements.length > 0) {
                focusableElements[0].focus();
            }
        } else {
            setIsVisible(false);
            document.body.classList.remove('modal-open');
        }

        // Cleanup function
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [isOpen]);

    // Handle ESC key press to close modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    // Handle backdrop click
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget && closeOnBackdropClick) {
            onClose();
        }
    };

    // Don't render anything if not open
    if (!isOpen && !isVisible) {
        return null;
    }

    // Modal classes
    const modalClasses = classNames('Modal', {
        'Modal--open': isOpen,
        'Modal--closing': !isOpen && isVisible,
        [`Modal--${size}`]: size,
        [className]: className
    });

    return (
        <div className={modalClasses} onClick={handleBackdropClick} role="dialog" aria-modal="true" {...props}>
            <div className="Modal__backdrop"></div>
            <div className="Modal__container" ref={modalRef}>
                <div className="Modal__content">
                    <div className="Modal__header">
                        <h2 className="Modal__title">{title}</h2>
                        {showCloseButton && (
                            <button 
                                className="Modal__close" 
                                aria-label="Close modal" 
                                onClick={onClose}
                            >
                                &times;
                            </button>
                        )}
                    </div>
                    <div className="Modal__body">
                        {children}
                    </div>
                    {footer && (
                        <div className="Modal__footer">
                            {footer}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    /** Controls whether the modal is displayed */
    isOpen: PropTypes.bool.isRequired,
    /** Function to call when the modal should close */
    onClose: PropTypes.func.isRequired,
    /** Modal title shown in the header */
    title: PropTypes.node.isRequired,
    /** Modal content */
    children: PropTypes.node.isRequired,
    /** Modal size variant */
    size: PropTypes.oneOf(['small', 'medium', 'large', 'fullscreen']),
    /** Whether clicking the backdrop should close the modal */
    closeOnBackdropClick: PropTypes.bool,
    /** Whether to show the close button in the header */
    showCloseButton: PropTypes.bool,
    /** Content for the modal footer */
    footer: PropTypes.node,
    /** Additional CSS class names */
    className: PropTypes.string
};

export default Modal;
