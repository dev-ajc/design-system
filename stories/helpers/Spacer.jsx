import React from 'react'
import PropTypes from 'prop-types'


const Spacer = ({children, className, style}) => (
    <div
        className={`${className} bg-light-gray rounded-md p-md mb-sm text-center`}
        style={{
            alignContent: 'center',
            ...style
        }}
    >
        {children}
    </div>
)

Spacer.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object
}

export default Spacer
