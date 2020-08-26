import React from "react";
import MastheadContainer from './masthead/masthead_container';
import Modal from './shared_components/popup_modal';
import HomepageContainer from "./homepage/homepage_container";
import { Route } from "react-router-dom";
import { ProtectedRoute } from '../utils/route_util';
import Menu from './foods/menu';
import FoodShowContainer from "./foods/food_show_container";
import OrderPageContainer from "./order_page/order_page_container";
import CheckoutContainer from "./checkout/checkout";
import ConfirmationContainer from './confirmation/confirmation_container';

const App = () => (
  <div>
    <header>
      <MastheadContainer />
    </header>
    <div className="under-masthead">
      <Route exact path="/" component={HomepageContainer} />
      <Route path={`/menu/:foodId`} component={FoodShowContainer} />
      <Route exact path="/menu" component={Menu} />
      <ProtectedRoute exact path="/order" component={OrderPageContainer} />
      <ProtectedRoute path="/checkout" component={CheckoutContainer} />
      <ProtectedRoute path="/confirmation" component={ConfirmationContainer} />
    </div>

    <Modal />
  </div>
);

export default App;

