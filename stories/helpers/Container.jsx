import React from 'react'


export default function DemoContainer({ children, className, size = 'xl', container = true }) {
    const containerSize = container ? `container container--${size}` : '';
    return (<div className={`${containerSize} ${className}`}>
        {children}
    </div>)
}
