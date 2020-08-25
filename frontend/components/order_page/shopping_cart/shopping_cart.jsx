import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartItem from './shopping_cart_item';
import { removeItemFromCart } from '../../../actions/shopping_cart_actions';
import {
  openOrderItemModal,
  setOrderItemModalId,
} from "../../../actions/modal_actions";

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.renderCartItems = this.renderCartItems.bind(this);
    this.editCartItems = this.editCartItems.bind(this);
  }

  editCartItems(foodId) {
    this.props.setOrderItemModalId(foodId);
    this.props.openOrderItemModal();
  }

  renderCartItems(shoppingCart) {
    const foodIds = Object.keys(shoppingCart);
    const { foodItems, removeItemFromCart } = this.props;
    const cartItems = foodIds.map((foodId) => {
      const foodItem = foodItems[foodId];
      const cartQuantity = shoppingCart[foodId].quantity;
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
    return cartItems;
  }

  render() {
    const { shoppingCart } = this.props;
    if(Object.keys(shoppingCart).length) {
      return (
        <div>
          <div className="cart-header">
            <h3>Order Summary</h3>
          </div>
          <div className="cart-items-wrapper">
            {this.renderCartItems(shoppingCart)}
          </div>
        </div>
      );
    } 
    return <div>No items yet, add some to the cart!</div>;
    
  }
}


const mSTP = (state) => ({
  shoppingCart: state.ui.shoppingCart,
  foodItems: state.entities.foodItems
});

const mDTP = (dispatch) => ({
  removeItemFromCart: (foodId) => dispatch(removeItemFromCart(foodId)),
  openOrderItemModal: () => dispatch(openOrderItemModal()),
  setOrderItemModalId: (foodId) => dispatch(setOrderItemModalId(foodId)),
});

export default connect(mSTP, mDTP)(ShoppingCart);