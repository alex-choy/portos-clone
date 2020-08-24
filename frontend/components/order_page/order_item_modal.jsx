import React from "react";
import OrderItemQuantity from './order_item_quantity';
import AddToCart from './add_to_cart';

class OrderItemModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateQuantity: 1,
      decreaseAllowed: true,
    };
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.addItemsToCart = this.addItemsToCart.bind(this);
  }

  increaseQuantity() {
    const currQuantity = this.state.stateQuantity;
    const remainingQuantity = this.props.foodItem.quantity;
    if(currQuantity < remainingQuantity) {
      this.setState({
        stateQuantity: this.state.stateQuantity + 1,
        decreaseAllowed: true,
      });
    }
  }

  decreaseQuantity() {
    const currQuantity = this.state.stateQuantity;
    if (currQuantity > 1) {
      this.setState({ stateQuantity: currQuantity - 1 });
    }
  }

  addItemsToCart() {
    const { name } = this.props.foodItem;
    const { stateQuantity } = this.state;
    // localStorage.setItem(name, quantity);
  }

  render() {
    const { name, description, photo_url, quantity, price } = this.props.foodItem;
    const { stateQuantity } = this.state;
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
                stateQuantity={stateQuantity}
                increaseQuantity={this.increaseQuantity}
                decreaseQuantity={this.decreaseQuantity}
                remainingQuantity={quantity}
              />
              <AddToCart 
                remainingQuantity={quantity} 
                addItemsToCart={this.addItemsToCart}
                stateQuantity={stateQuantity}
                price={price} />
              {/* Make price or sold out component here */}
            </div>
          </section>
          <div className="order-img-wrapper">
            <img
              className={quantity > 1 ? "" : "sold-out-img"}
              src={photo_url}
              alt=""
            />
            <h3 className={quantity > 1 ? "in-stock" : "sold-out"}>SOLD OUT</h3>
            {/* <img className="sold-out-img" src={photo_url} alt="" />
            <h3 className="sold-out">SOLD OUT</h3> */}
          </div>
          {/* <img className="order-img" src={photo_url} alt="" />
          <h3>SOLD OUT</h3> */}
          {/* <div className="order-img">
            <img src={photo_url} alt="" />
          </div> */}
        </section>
      </div>
    );
  }
}

export default OrderItemModal;
