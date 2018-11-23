import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route component={() => <h1>Not found</h1>} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
