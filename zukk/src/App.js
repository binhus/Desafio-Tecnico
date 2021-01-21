import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Components/login';
import Clients from './Components/Clients';
import './App.css';
import EditClient from './Components/EditClient';

function App() {
  return (
    <Switch>
      <div className="d-flex fluid w-100">
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route path="/clients" component={Clients} />
        <Route path="/client/:id" component={EditClient} />
      </div>
    </Switch>
  );
}

export default App;
