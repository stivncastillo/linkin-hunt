import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import store from './data/store';

// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

const STORE = store();

ReactDOM.render(
    <Provider store={STORE.store}>
        <PersistGate loading={null} persistor={STORE.persistor}>
            <App />
        </PersistGate>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
