import React from "react";
import MastheadContainer from './masthead/masthead_container';
import Modal from './session_forms/session_modal';
import HomepageContainer from "./homepage/homepage_container";

const App = () => (
  <div>
    <header>
      <MastheadContainer />
    </header>
    <HomepageContainer />
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

