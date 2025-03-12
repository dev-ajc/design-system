import React from 'react'


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

export default Spacer
