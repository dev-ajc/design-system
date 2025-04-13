import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    fullWidth = false,
    className = '',
    onClick,
    leftIcon=null,
    rightIcon=null,
    ...props
}) => {
    const baseStyles = 'font-medium transition-colors duration-200';

    const variants = {
        primary: 'button--primary',
        secondary: 'button--secondary',
        outline: 'button--outline',
        danger: 'button--danger',
        micro: 'button--micro',
        inline: 'button--inline',
        icon: 'button--icon',
    };

    const sizes = {
        small: 'button--sm',
        medium: 'button--md',
        large: 'button--lg',
    };

    const classes = [
        'button',
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth ? 'button--block' : '',
        disabled ? 'opacity-50 cursor-not-allowed' : '',
        className,
    ].join(' ');

    return (
        <button
            className={classes}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            {leftIcon && <span className="button__icon button__icon--left">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="button__icon button__icon--right">{rightIcon}</span>}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'danger', 'small', 'large', 'block']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
};

export default Button;
