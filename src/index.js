import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/Home';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
