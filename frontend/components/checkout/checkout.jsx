import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ShoppingCartItem from '../order_page/shopping_cart/shopping_cart_item';
import { SHOPPING_CART } from '../order_page/order_page';
import { getFoodItems } from '../../actions/food_item_actions';
import { setOrderItemModalId, openOrderItemModal } from '../../actions/modal_actions';
import {
  getLocalShoppingCart,
  removeItemFromCart,
} from "../../actions/shopping_cart_actions";
import { createOrder } from '../../actions/order_actions';
import CheckoutPricing from './checkout_pricing';
import { withRouter } from 'react-router-dom';
import OrderItems from '../orders/order_items';

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MINUTE_INTERVALS = [15, 30, 45];


class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buyer_id: this.props.currentUser.id,
      notes: '',
      pickup_time: '',
    }
    this.editCartItems = this.editCartItems.bind(this);
    this.stateChange = this.stateChange.bind(this);
    this.handleSubmitOrder = this.handleSubmitOrder.bind(this);
    this.getErrors = this.getErrors.bind(this);
  }

  componentDidMount() {
    this.props.getFoodItems();
    this.props.getLocalShoppingCart();
    this.setState({ pickup_time: this.getPickupTime() });
  }

  componentDidUpdate() {
    localStorage.setItem(
      SHOPPING_CART,
      JSON.stringify(this.props.shoppingCart)
    );
  }

  stateChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmitOrder() {
    const { shoppingCart, createOrder} = this.props; 
    const order = {...this.state};
    // console.log('SC: ', shoppingCart);
    createOrder(JSON.stringify(shoppingCart), order)
      .then(() => this.props.history.push("/confirmation"));
  }

  getErrors() {
    const { orderErrors } = this.props;
    if(orderErrors.length > 0) {
      return <ul>
        {orderErrors.map((error, idx) => <li className="errors" key={idx}>{error}</li>)}
      </ul>
    }
  }

  editCartItems(foodId) {
    this.props.setOrderItemModalId(foodId);
    this.props.openOrderItemModal();
  }

  getNextMinute(currMinutes) {
    const findNextTime = (time) => time > currMinutes;
    const nextTime = MINUTE_INTERVALS.find(findNextTime);
    return nextTime ? nextTime : 0;
  }

  getPickupTime() {
    var today = new Date();
    const newMinutes = this.getNextMinute(today.getMinutes());
    const newHour = newMinutes ? today.getHours() + 1 : today.getHours() + 2;

    const formattedMinutes = newMinutes.toString().padStart(2, "0");
    const formattedHours = (newHour % 12) ? newHour % 12 : 12;
    const amOrPm = (newHour < 24 && newHour >= 12) ? 'pm' : 'am';

    const pickupDay = new Date(today);
    if(newHour >= 24) {
      pickupDay.setDate(pickupDay.getDate() + 1);
    }

    const pickup_time = `${MONTHS[pickupDay.getMonth()]} ${pickupDay.getDate()} at ${formattedHours}:${formattedMinutes}${amOrPm}`;
    return pickup_time;
  }

  render() {
    const { currentUser, shoppingCart, foodItems, removeItemFromCart } = this.props;
    if (shoppingCart.length > 0 && JSON.stringify(foodItems) != "{}") {
      return (
        <div className="checkout-wrapper">
          <div className="col col-5-8 set-size left-checkout">
            <span className="checkout-title">
              Hi {currentUser.username}, <br />
              let's finish up your order!
            </span>
            <span className="cash-note">
              *Currently only taking cash, our credit card system is down!
            </span>
            <span>
              <p>
                Order now, and it will be available on
              </p> 
            </span>
            <span className="pickup-time">
              {this.state.pickup_time}
            </span>
            <textarea className="order-notes" name="order[notes]" id="" cols="50" rows="10" placeholder="Order notes..." onChange={this.stateChange('notes')}>
            </textarea>
          </div>
          <div className="col col-3-8 set-size">
            <div className="cart-header ">
              <h3>
                Order Summary
              </h3>
            </div>
            <OrderItems 
              cartFoodItems={shoppingCart}
              foodItems={foodItems}
              removeItemFromCart={removeItemFromCart}
              editCartItems={this.editCartItems}
              handleSubmitOrder={this.handleSubmitOrder}
              getErrors={this.getErrors}
            />
          </div>
        </div>
      );
    }
    return <div>This might take a second, but if not it's probably broken</div>;
  }
}

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id], 
  shoppingCart: state.ui.shoppingCart,
  orderErrors: state.errors.orders,
  foodItems: state.entities.foodItems,
  completedOrders: state.entities.orders
});

const mDTP = (dispatch) => ({
  removeItemFromCart: (foodId) => dispatch(removeItemFromCart(foodId)),
  getFoodItems: () => dispatch(getFoodItems()),
  openOrderItemModal: () => dispatch(openOrderItemModal()),
  setOrderItemModalId: (foodId) => dispatch(setOrderItemModalId(foodId)),
  getLocalShoppingCart: () => dispatch(getLocalShoppingCart()),
  createOrder: (shoppingCart, order) => dispatch(createOrder(shoppingCart, order))
  // add to order action
  // modal stuff?
});

export default connect(mSTP, mDTP)(withRouter(Checkout));