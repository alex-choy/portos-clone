import React from 'react';
import ShoppingCartItem from '../order_page/shopping_cart/shopping_cart_item';
import CheckoutPricing from '../checkout/checkout_pricing';
import OrderItems from '../orders/order_items';
import { Link } from 'react-router-dom';

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
            <div className="cart-header top-box">
              <h3>
                Order Summary
              </h3>
              <p>
                Pickup time: {order.pickup_time}
              </p>
            </div>
            <OrderItems 
              cartFoodItems={orderedFoodItems} 
              foodItems={foodItems}
            />
          </div>
          <Link className="to-order-btn" to={`orders/${order.id}`}>Check out your order here!</Link>
        </div>
      );
    }
    return "Please make an order, you shouldn't be on this page!"
  }
}

export default Confirmation;