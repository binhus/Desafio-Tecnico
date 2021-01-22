import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Components/login';
import Clients from './Components/Clients';
import './App.css';
import EditClient from './Components/EditClient';
import CreateClient from './Components/CreateClient';

function App() {
  return (
    <div className="d-flex fluid w-100 justify-content-center">
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route path="/clients" component={Clients} />
        <Route exact path="/client/create" component={CreateClient} />
        <Route path="/client/:id" component={EditClient} />
      </Switch>
    </div>
  );
}

export default App;
