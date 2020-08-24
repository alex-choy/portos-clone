import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartItem from './shopping_cart_item';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.renderCartItems = this.renderCartItems.bind(this);
  }

  renderCartItems(shoppingCart) {
    const foodIds = Object.keys(shoppingCart);
    const { foodItems } = this.props;
    const cartItems = foodIds.map((foodId) => {
      const foodItem = foodItems[foodId];
      const cartQuantity = shoppingCart[foodId].quantity;
      return <ShoppingCartItem 
        key={foodId}
        cartQuantity={cartQuantity}
        foodItem={foodItem}
      />
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

});

export default connect(mSTP, mDTP)(ShoppingCart);