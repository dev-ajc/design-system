import React from 'react';
import PropTypes from 'prop-types';

import './TypographyShowcase.scss';


const TypographyShowcase = ({ children, className = '' }) => {
  return (
    <div className={`typography-showcase ${className}`}>
      {children}
    </div>
  );
};

TypographyShowcase.PropTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}

export default TypographyShowcase; 
