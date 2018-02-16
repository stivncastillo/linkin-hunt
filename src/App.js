import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import * as routes from './constants/routes';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path={routes.HOME} component={Home} />
                    <Route path={routes.SIGN_IN} component={Login} />
                    <Route path={routes.SIGN_UP} component={Register} />
                </div>
            </Router>
        );
    }
}

export default App;
