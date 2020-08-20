import React from "react";
import MastheadContainer from './masthead/masthead_container';
import Modal from './session_forms/session_modal';
import HomepageContainer from "./homepage/homepage_container";
import { Route } from "react-router-dom";
import Menu from './foods/menu';
import FoodShowContainer from "./foods/food_show_container";

const App = () => (
  <div>
    <header>
      <MastheadContainer />
    </header>
    <Route exact path="/" component={HomepageContainer} />
    <Route path={`/menu/:foodId`} component={FoodShowContainer} />
    <Route exact path="/menu" component={Menu} />

    <Modal />
  </div>
);

export default App;

