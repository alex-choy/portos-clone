import React from "react";
import MastheadContainer from './masthead/masthead_container';
import Modal from './session_forms/popup_modal';
import HomepageContainer from "./homepage/homepage_container";
import { Route } from "react-router-dom";
import Menu from './foods/menu';
import FoodShowContainer from "./foods/food_show_container";
import OrderPageContainer from "./order_page/order_page_container";

const App = () => (
  <div>
    <header>
      <MastheadContainer />
    </header>
    <div className="under-masthead">
      <Route exact path="/" component={HomepageContainer} />
      <Route exact path="/order" component={OrderPageContainer} />
      <Route path={`/menu/:foodId`} component={FoodShowContainer} />
      <Route exact path="/menu" component={Menu} />
    </div>

    <Modal />
  </div>
);

export default App;

