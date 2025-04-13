import React from 'react'
import PropTypes from 'prop-types'


export default function DemoContainer({ children, className, size = 'xl', container = true }) {
    const containerSize = container ? `container container--${size}` : '';
    return (<div className={`${containerSize} ${className}`}>
        {children}
    </div>)
}

DemoContainer.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    size: PropTypes.string,
    container: PropTypes.bool
}
