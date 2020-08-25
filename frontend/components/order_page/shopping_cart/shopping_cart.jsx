import React from 'react';
import { connect } from 'react-redux';
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

  componentDidMount() {
    // this.props.getFoodItems();
  }

  componentDidUpdate() {
    localStorage.setItem(SHOPPING_CART, JSON.stringify(this.props.shoppingCart));
  }

  editCartItems(foodId) {
    this.props.setOrderItemModalId(foodId);
    this.props.openOrderItemModal();
  }

  renderCartItems(shoppingCart) {
    const { foodItems, removeItemFromCart } = this.props;
    // console.log(shoppingCart);
    const cartItems = shoppingCart.map((foodInfo) => {
      // console.log(foodInfo);
      const { foodId, quantity: cartQuantity } = foodInfo;
      // console.log('foodId: ', foodId);
      const foodItem = foodItems[foodId];
      // console.log('foodItem: ', foodItem);
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
    const { foodItems, shoppingCart } = this.props;
    // console.log('foodItems: ', foodItems);
    // if(JSON.stringify(foodItems) != '{}') {
    console.log("shoppingCart:", shoppingCart);
    if (shoppingCart.length > 0 && JSON.stringify(foodItems) != "{}") {
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