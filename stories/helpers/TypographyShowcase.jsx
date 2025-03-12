import React from 'react';
import './TypographyShowcase.scss';

const TypographyShowcase = ({ children, className = '' }) => {
  return (
    <div className={`typography-showcase ${className}`}>
      {children}
    </div>
  );
};

export default TypographyShowcase; 