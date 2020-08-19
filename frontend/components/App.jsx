import React from "react";
import MastheadContainer from './masthead/masthead_container';
import Modal from './session_forms/session_modal';
import VideoOverlay from './homepage/video_overlay';

const App = () => (
  <div>
    <header>
      <MastheadContainer />
    </header>
    {/* <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/" component={GreetingContainer} />
    </Switch> */}
    <VideoOverlay />
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

