import React from "react";
import MastheadContainer from './masthead/masthead_container';
import Modal from './session_forms/session_modal';
import HomepageContainer from "./homepage/homepage_container";
import { Route } from "react-router-dom";
import Menu from './foods/menu';

const App = () => (
  <div>
    <header>
      <MastheadContainer />
    </header>
    <Route exact path="/" component={HomepageContainer} />
    <Route path="/menu" component={Menu} />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <h1>text here</h1>

    <Modal />
  </div>
);

export default App;

