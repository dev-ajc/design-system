import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const RangeSlider = ({
    min = 0,
    max = 100,
    step = 1,
    defaultValue,
    value,
    onChange,
    onChangeComplete,
    disabled = false,
    showLabels = true,
    showValue = true,
    variant = 'primary',
    size = 'medium',
    formatValue,
    className,
    labelMin,
    labelMax,
    ...props
}) => {
    // Handle controlled vs uncontrolled component
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState(
        isControlled ? value : (defaultValue !== undefined ? defaultValue : min)
    );
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef(null);
    
    // Update internal value when controlled value changes
    useEffect(() => {
        if (isControlled && value !== internalValue) {
            setInternalValue(value);
        }
    }, [isControlled, value]);

    // Calculate percentage for visual fill
    const percentage = ((internalValue - min) / (max - min)) * 100;
    
    // Format the displayed value
    const displayValue = formatValue ? formatValue(internalValue) : internalValue;

    // Handle value change
    const handleChange = (newValue) => {
        if (disabled) return;
        
        // Ensure value is within bounds and aligned to step
        const clampedValue = Math.min(Math.max(newValue, min), max);
        const steppedValue = Math.round((clampedValue - min) / step) * step + min;
        
        if (!isControlled) {
            setInternalValue(steppedValue);
        }
        
        if (onChange) {
            onChange(steppedValue);
        }
    };

    // Handle slider click
    const handleSliderClick = (e) => {
        if (disabled || !sliderRef.current) return;
        
        const rect = sliderRef.current.getBoundingClientRect();
        const position = (e.clientX - rect.left) / rect.width;
        const newValue = min + position * (max - min);
        
        handleChange(newValue);
        
        if (onChangeComplete) {
            onChangeComplete(newValue);
        }
    };

    // Handle native input change
    const handleInputChange = (e) => {
        const newValue = parseFloat(e.target.value);
        handleChange(newValue);
    };

    // Handle drag end
    const handleDragEnd = () => {
        if (isDragging && onChangeComplete) {
            onChangeComplete(internalValue);
        }
        setIsDragging(false);
    };
    
    // Attach global mouse up handler for drag end
    useEffect(() => {
        if (isDragging) {
            const handleMouseUp = () => handleDragEnd();
            
            document.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('touchend', handleMouseUp);
            
            return () => {
                document.removeEventListener('mouseup', handleMouseUp);
                document.removeEventListener('touchend', handleMouseUp);
            };
        }
    }, [isDragging, internalValue]);

    // CSS classes
    const sliderClasses = classNames('RangeSlider', {
        'RangeSlider--disabled': disabled,
        [`RangeSlider--${variant}`]: variant,
        [`RangeSlider--${size}`]: size,
        [className]: className
    });
    
    return (
        <div className={sliderClasses}>
            {/* Min/Max labels */}
            {showLabels && (
                <div className="RangeSlider__labels">
                    <span className="RangeSlider__label">{labelMin || min}</span>
                    {showValue && (
                        <span className="RangeSlider__value">{displayValue}</span>
                    )}
                    <span className="RangeSlider__label">{labelMax || max}</span>
                </div>
            )}
            
            {/* Slider track */}
            <div 
                className="RangeSlider__track" 
                ref={sliderRef}
                onClick={handleSliderClick}
            >
                <div 
                    className="RangeSlider__fill" 
                    style={{ width: `${percentage}%` }}
                ></div>
                
                {/* Native range input (for accessibility) */}
                <input
                    type="range"
                    className="RangeSlider__input"
                    min={min}
                    max={max}
                    step={step}
                    value={internalValue}
                    onChange={handleInputChange}
                    onMouseDown={() => setIsDragging(true)}
                    onTouchStart={() => setIsDragging(true)}
                    disabled={disabled}
                    {...props}
                />
            </div>
            
            {/* Show value only if not already showing in labels */}
            {showValue && !showLabels && (
                <div className="RangeSlider__value-container">
                    <span className="RangeSlider__value">{displayValue}</span>
                </div>
            )}
        </div>
    );
};

RangeSlider.propTypes = {
    /** Minimum value */
    min: PropTypes.number,
    /** Maximum value */
    max: PropTypes.number,
    /** Step increment */
    step: PropTypes.number,
    /** Default value (uncontrolled) */
    defaultValue: PropTypes.number,
    /** Current value (controlled) */
    value: PropTypes.number,
    /** Change handler */
    onChange: PropTypes.func,
    /** Handler called when dragging ends */
    onChangeComplete: PropTypes.func,
    /** Whether the slider is disabled */
    disabled: PropTypes.bool,
    /** Show min/max labels */
    showLabels: PropTypes.bool,
    /** Show current value */
    showValue: PropTypes.bool,
    /** Color variant */
    variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'success', 'danger', 'warning', 'info']),
    /** Size variant */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Function to format displayed value */
    formatValue: PropTypes.func,
    /** Additional CSS class */
    className: PropTypes.string,
    /** Custom label for minimum value */
    labelMin: PropTypes.node,
    /** Custom label for maximum value */
    labelMax: PropTypes.node
};

export default RangeSlider;
