import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Components/login';
import Clients from './Components/Clients';
import './App.css';

function App() {
  return (
    <Switch>
      <div className="App">
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route path="/app" component={Clients} />
      </div>
    </Switch>
  );
}

export default App;
