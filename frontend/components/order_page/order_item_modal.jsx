import React from 'react';
import FoodIndexItem from '../foods/food_index_item';

class OrderItemModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      price: this.props.foodItem.price
    };
  }


  render() {
    const { name, description, photo_url } = this.props.foodItem;
    return (
      <div className="order-item-modal-wrapper">
        <section className="order-modal-food-item">
          <h2>{name}</h2>
          <span className="order-modal-details">
            <p>{description}</p>
            <img src={photo_url} alt=""/>
          </span>
        </section>
        <section className="order-modal-quantitiy">
          <span>
            quantity thing
            total price
          </span>
        </section>
      </div>
    );
  }
}

export default OrderItemModal;