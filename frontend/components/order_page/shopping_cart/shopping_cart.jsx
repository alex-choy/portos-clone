import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ShoppingCartItem from './shopping_cart_item';
import { removeItemFromCart } from '../../../actions/shopping_cart_actions';
import {
  openOrderItemModal,
  setOrderItemModalId,
} from "../../../actions/modal_actions";
import { SHOPPING_CART } from '../order_page';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.renderCartItems = this.renderCartItems.bind(this);
    this.editCartItems = this.editCartItems.bind(this);
  }

  componentDidUpdate() {
    localStorage.setItem(SHOPPING_CART, JSON.stringify(this.props.shoppingCart));
  }

  editCartItems(foodId) {
    this.props.setOrderItemModalId(foodId);
    this.props.openOrderItemModal();
  }

  renderCartItems() {
    const { foodItems, removeItemFromCart, shoppingCart} = this.props;
    let totalPrice = 0;
    const cartItems = shoppingCart.map((foodInfo) => {
      const { foodId, quantity: cartQuantity } = foodInfo;
      const foodItem = foodItems[foodId];
      totalPrice += (foodItem.price * cartQuantity);
      return (
        <ShoppingCartItem
          key={foodId}
          cartQuantity={cartQuantity}
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
        <Link to="/checkout" className="checkout-btn">Checkout</Link>
      </div>
    );
    return cartItems;
  }

  render() {
    const { foodItems, shoppingCart } = this.props;
    if (shoppingCart.length > 0 && JSON.stringify(foodItems) != "{}") {
      return (
        <div>
          <div className="cart-header top-box">
            <h3>Order Summary</h3>
          </div>
          <div className="cart-items-wrapper">
            {this.renderCartItems()}
          </div>
        </div>
      );
    }
    return <div>No items yet, add some to the cart!</div>;
  }
}


const mSTP = (state) => ({
  // shoppingCart: state.ui.shoppingCart,
  shoppingCart: state.ui.shoppingCart,
  foodItems: state.entities.foodItems
});

const mDTP = (dispatch) => ({
  removeItemFromCart: (foodId) => dispatch(removeItemFromCart(foodId)),
  openOrderItemModal: () => dispatch(openOrderItemModal()),
  setOrderItemModalId: (foodId) => dispatch(setOrderItemModalId(foodId)),
  // getFoodItems: () => dispatch(getFoodItems()),
});

export default connect(mSTP, mDTP)(ShoppingCart);