import React from "react";
import { withRouter, Link } from "react-router-dom";
import OrderShowItem from "./order_show_item";
import OrderShowInfo from "./order_show_info";

class OrderShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.changeNotes = this.changeNotes.bind(this);
    this.renderOrderShowItems = this.renderOrderShowItems.bind(this);
    this.getTotalPrice = this.getTotalPrice.bind(this);
  }

  componentDidMount() {
    Promise.all([
      this.props.getOrder(this.props.match.params.orderId),
      this.props.getFoodItems().then(() => 
      this.props.fetchOrderedFoodItems(this.props.match.params.orderId) ),
      this.setState({
        notes: this.props.order ? this.props.order.notes : '',
      })
    ]); 
  }

  // componentDidUpdate() {
  //   Promise.all([
  //     this.props.getOrder(this.props.match.params.orderId),
  //     this.props.fetchOrderedFoodItems(this.props.match.params.orderId),
  //     this.setState({
  //       notes: this.props.order ? this.props.order.notes : '',
  //     })
  //   ]);
  // }


  changeNotes(e) {
    this.setState({ notes: e.target.value });
  }

  renderOrderShowItems() {
    const { orderedFoodItems, foodItems } = this.props;
    const orderShowItems = orderedFoodItems.map(({ food_item_id: foodId, quantity }) => {
      const { photo_url: imgUrl, name, price } = foodItems[foodId];
      return <OrderShowItem 
        key={foodId}
        imgUrl={imgUrl}
        name={name}
        price={price}
        foodId={foodId}
        quantity={quantity}
      />;
    });

    return orderShowItems;
  }

  getTotalPrice() {
    const { foodItems, orderedFoodItems } = this.props;
    let totalPrice = 0;
    orderedFoodItems.map(({ food_item_id, quantity}) => {
      totalPrice += parseFloat(foodItems[food_item_id].price) * quantity    
    });
    return totalPrice.toFixed(2)
  }

  render() {
    const { foodItems, order, orderedFoodItems } = this.props;
    if (Object.keys(foodItems).length && Object.keys(orderedFoodItems).length
            && order  && Object.keys(this.state).length){
      const { id: orderId, pickup_time: pickupTime } = this.props.order;

      return (
        <div className="order-show-wrapper">
          <h1 className="order-title">Order #{orderId}</h1>
          <div className="content-wrapper">
            <section className="col-5-8 ordered-items">
              <h2 className="top-box order-summary">Order Summary</h2>
              {this.renderOrderShowItems()}
              <div className="no-top-border subtotal">
                <span>Total:</span>
                <span>${this.getTotalPrice()}</span>
              </div>
            </section>
            <OrderShowInfo
              notes={this.state.notes}     
              changeNotes={this.changeNotes}
              pickupTime={pickupTime}
            />
          </div>
          <button className="delete-order">Delete Order</button>
          {/* <input type="text" value={this.state.notes} onChange={this.changeNotes}/> */}
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

export default withRouter(OrderShow);
