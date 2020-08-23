import React from "react";
import OrderItemQuantity from './order_page_quantity';

class OrderItemModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      price: this.props.foodItem.price,
      decreaseAllowed: true,
    };
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }

  increaseQuantity() {
    this.setState({ quantity: this.state.quantity + 1, decreaseAllowed: true });
  }

  decreaseQuantity() {
    const currQuantity = this.state.quantity;
    if (currQuantity > 1) {
      this.setState({ quantity: currQuantity - 1 });
    }
  }

  render() {
    const { name, description, photo_url } = this.props.foodItem;
    const { quantity } = this.state;
    return (
      <div className="order-item-modal-wrapper">
        <h2>{name}</h2>
        <section className="order-modal-food-item">
          <section className="left-order-modal">
            <span className="order-modal-details">
              <p>{description}</p>
            </span>
            <div className="add-to-cart">
              <OrderItemQuantity
                quantity={quantity}
                increaseQuantity={this.increaseQuantity}
                decreaseQuantity={this.decreaseQuantity}
              />
              <button className="add-to-cart-btn">
                <span>Add to Order</span>
                <span>${(quantity * this.state.price).toFixed(2)}</span>
              </button>
            </div>
          </section>
          <img src={photo_url} alt="" />
        </section>
      </div>
    );
  }
}

export default OrderItemModal;
