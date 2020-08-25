import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ShoppingCartItem from '../order_page/shopping_cart/shopping_cart_item';
import { SHOPPING_CART } from '../order_page/order_page';
import { getFoodItems } from '../../actions/food_item_actions';
import { setOrderItemModalId, openOrderItemModal } from '../../actions/modal_actions';
import { getLocalShoppingCart } from '../../actions/shopping_cart_actions';

class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.renderCartItems = this.renderCartItems.bind(this);
    this.editCartItems = this.editCartItems.bind(this);
  }

  componentDidMount() {
    this.props.getFoodItems();
    this.props.getLocalShoppingCart();
  }

  componentDidUpdate() {

  }

  editCartItems(foodId) {
    this.props.setOrderItemModalId(foodId);
    this.props.openOrderItemModal();
  }

  renderCartItems() {
    const { shoppingCart, foodItems, removeItemFromCart } = this.props;
    let totalPrice = 0;
    console.log('shopping cart: ', shoppingCart);
    const cartItems = shoppingCart.map((cartItem) => {
      const { foodId, quantity } = cartItem;
      const foodItem = foodItems[foodId];
      totalPrice += parseFloat(foodItem.price);
      return (
        <ShoppingCartItem
          key={foodId}
          cartQuantity={quantity}
          foodItem={foodItem}
          removeItemFromCart={removeItemFromCart}
          editCartItems={this.editCartItems}
        />
      );
    });

    cartItems.push(
      <div key="cart-bottom" className="no-top-border shopping-cart-bottom">
        <div className="subtotal">
          <span>Subtotal:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <Link to="/checkout" className="checkout-btn">
          Place Order
        </Link>
      </div>
    );
    return cartItems;
  }

  render() {
    const { currentUser, shoppingCart, foodItems } = this.props;
    if (shoppingCart && JSON.stringify(foodItems) != "{}"){
      return (
        <div className="checkout-wrapper">
          <div className="col col-5-8 set-size">
            <span>
              Hi {currentUser.username}, <br />
              let's finish up your order!
            </span>
            {/* username with message */}
            {/* pickup time and day */}
            {/* payment method? cash only? */}
            {/* place order button */}
          </div>
          <div className="col col-3-8 set-size">{this.renderCartItems()}</div>
        </div>
      );
    }
    return <div>This might take a second, but if not it's probably broken</div>
  }
}

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id], 
  // shoppingCart: JSON.parse(localStorage.getItem(SHOPPING_CART)),
  shoppingCart: state.ui.shoppingCart,
  foodItems: state.entities.foodItems
});

const mDTP = (dispatch) => ({
  removeItemFromCart: (foodId) => dispatch(removeItemFromCart(foodId)),
  getFoodItems: () => dispatch(getFoodItems()),
  openOrderItemModal: () => dispatch(openOrderItemModal()),
  setOrderItemModalId: (foodId) => dispatch(setOrderItemModalId(foodId)),
  getLocalShoppingCart: () => dispatch(getLocalShoppingCart()),
  // add to order action
  // modal stuff?
});

export default connect(mSTP, mDTP)(Checkout);