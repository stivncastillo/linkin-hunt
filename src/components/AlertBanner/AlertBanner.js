import React from 'react';
import { Alert } from 'antd';

const AlertBanner = ({ type = 'info', message = 'Welcome' }) => <Alert message={message} type={type} banner />;

export default AlertBanner;
