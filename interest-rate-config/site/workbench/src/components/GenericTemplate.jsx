import React from 'react';

export const GenericTemplate = ({ children }) => {
  return (
    <div className="u-pattern">
      <div className="generic-template-container u-container-padding">
        <div className="wrapper">
          {children}
        </div>
      </div>
    </div>
  );
};
