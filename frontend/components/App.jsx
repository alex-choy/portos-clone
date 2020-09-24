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
import OrderShowContainer from "./orders/order_show_container";
import AccountContainer from "./account/account_container";
import Footer from './footer/footer';


const App = () => (
  <div className="app">
    <header>
      <MastheadContainer />
    </header>
    <div className="under-masthead cf">
      <Route exact path="/" component={HomepageContainer} />
      <Route path={`/menu/:foodId`} component={FoodShowContainer} />
      <Route exact path="/menu" component={Menu} />
      <ProtectedRoute path="/orders/:orderId" component={OrderShowContainer} />
      <ProtectedRoute exact path="/order" component={OrderPageContainer} />
      <ProtectedRoute path="/account" component={AccountContainer} />
      <ProtectedRoute path="/checkout" component={CheckoutContainer} />
      <ProtectedRoute path="/confirmation" component={ConfirmationContainer} />
    </div>
    {/* <div className="push"></div> */}
    <Footer />
    <Modal />
  </div>
);

export default App;

