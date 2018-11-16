import React from 'react';

const Alert = ({ type = '', children }) => <div className={`notification ${type}`}>{children}</div>;

export default Alert;
