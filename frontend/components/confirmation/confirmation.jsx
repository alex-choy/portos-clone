import React from 'react';
import ShoppingCartItem from '../order_page/shopping_cart/shopping_cart_item';
import CheckoutPricing from '../checkout/checkout_pricing';
import OrderItems from '../orders/order_items';

class Confirmation extends React.Component {
  componentDidMount() {
    if (this.props.order) {
      this.props.fetchOrderedFoodItems(this.props.order.id);
    }
  }

  render() {
    const { order, orderedFoodItems, currentUser, foodItems } = this.props;
    if(order && orderedFoodItems.length > 0) {
      return (
        <div className="confirmation-wrapper">
          <h1>Confirmed!</h1>
          <h4>Thank you {currentUser.username} for your order! </h4>
          <p>Here are the details:</p>
          <div className="order-items">
            <div className="cart-header ">
              <h3>
                Order Summary
                </h3>
            </div>
            {/* {this.renderOrderedItems()} */}
            <OrderItems 
              cartFoodItems={orderedFoodItems} 
              foodItems={foodItems}
            />
          </div>
        </div>
      );
    }
    return "Please make an order, you shouldn't be on this page!"
  }
}

export default Confirmation;