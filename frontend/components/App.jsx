import React from "react";
import GreetingContainer from './greetings/greeting_container';
import { Route, Switch, Link } from "react-router-dom";
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import { AuthRoute } from '../utils/route_util';
import Masthead from './masthead';

const App = () => (
  <div>
    <header>
      <Masthead />
    </header>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/" component={GreetingContainer} />
    </Switch>
    <br />
    <br />
  </div>
);

export default App;

