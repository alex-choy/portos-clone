import React from "react";
import GreetingContainer from './greetings/greeting_container';
import { Route, Redirect, Switch, Link } from "react-router-dom";
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';

const App = () => (
  <div>
    <header>
      <Link to="/"><h1>PoroSnax</h1></Link>
    </header>
    <Switch>
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
      <Route path="/" component={GreetingContainer} />
    </Switch>
    <br />
    <br />
  </div>
);

export default App;

