import React from 'react';
import { connect } from 'react-redux';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const { shoppingCart } = this.props;
    const testFoodKey = 2; // chocolate cookies test
    if(shoppingCart[testFoodKey]) {
      const shoppingCartQuantity = shoppingCart[testFoodKey].quantity;
      const { name, price } = this.props.foodItems[testFoodKey];
      // console.log('testFood: ', testFood);
      return (
        <div>
          <div className="cart-header">
            <h3>Order Summary</h3>
          </div>
          <div className="cart-items-wrapper">
            <div className="cart-item">
              <div className="cart-item-top">
                <div className="item-top-left">
                  <span className="cart-quantity">{shoppingCartQuantity}</span>
                  <span>{name}</span>
                </div>
                <div className="item-top-right">
                  <p>${(price * shoppingCartQuantity).toFixed(2)}</p>
                </div>
              </div>
              <div className="cart-item-bot">
                <button>Edit</button> 
                <span className="separator">|</span>
                <button>Remove</button>
              </div>
            </div>
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