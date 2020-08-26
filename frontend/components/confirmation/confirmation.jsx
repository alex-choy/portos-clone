import React from 'react';
import ShoppingCartItem from '../order_page/shopping_cart/shopping_cart_item';

class Confirmation extends React.Component {
  constructor(props) {
    super(props);

    this.renderOrderedItems = this.renderOrderedItems.bind(this);
  }


  componentDidMount() {
    if (this.props.order) {
      this.props.fetchOrderedFoodItems(this.props.order.id);
    }
  }

  // componentDidUpdate(previousProps) {
  //   if(previousProps.order.id !== this.props.order.id) {
  //     this.props.fetchOrderedFoodItems(this.props.order.id);
  //   }
  // }

  // cartQuantity,
  // foodItem: { id, name, price },
  // removeItemFromCart,
  // editCartItems 
  renderOrderedItems() {
    const { orderedFoodItems, foodItems } = this.props;
    console.log('orderedFoodItems', orderedFoodItems);
    const renderedOrderItems = orderedFoodItems.map((orderedItem, idx) => {
      console.log('orderedItem', orderedItem);
      const {quantity, food_item_id} = orderedItem;
      const foodItem = foodItems[food_item_id];
      return <ShoppingCartItem 
        key={idx}
        cartQuantity={quantity}
        foodItem={foodItem}
      />
    });

    return renderedOrderItems;
  }

  render() {
    const { order, orderedFoodItems } = this.props;
    console.log(this.props.orderedFoodItems);
    if(order && orderedFoodItems.length > 0) {
      return (
        <div>
          <h1>Confirmed!</h1>
          <h4>Thank you PUT_USERNAME_HERE for your order! </h4>
          <p>Here are the details:</p>
          {this.renderOrderedItems()}
        </div>
      );
    }
    return "Please make an order, you shouldn't be on this page!"
  }
}

export default Confirmation;