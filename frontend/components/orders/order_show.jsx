import React from "react";
import { withRouter, Link } from "react-router-dom";
import OrderShowItem from "./order_show_item";

class OrderShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.changeNotes = this.changeNotes.bind(this);
    this.renderOrderShowItems = this.renderOrderShowItems.bind(this);
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

  render() {
    const { foodItems, order, orderedFoodItems } = this.props;
    if (Object.keys(foodItems).length && Object.keys(orderedFoodItems).length
            && order  && Object.keys(this.state).length){
      const { foodItems, 
              order: { id: orderId, pickup_time: pickupTime }, 
              orderedFoodItems } = this.props;
      
      // goes in the function to render items?
      const { food_item_id, quantity } = orderedFoodItems[0];
      const foodItem = foodItems[food_item_id];
      const { photo_url: imgUrl, name, price, id: foodId } = foodItem;

      return (
        <div className="order-show-wrapper">
          <h1 className="order-title">Order #{orderId}</h1>
          <div className="content-wrapper">
            <section className="col-5-8 ordered-items">
              <h2 className="top-box order-summary">Order Summary</h2>
              {/* <section className="order-item-receipt no-top-border">
                <section className="left-order-item">
                  <img src={imgUrl} alt=""/>
                  <section className="order-item-text">
                    <Link to={`/menu/${foodId}`} className="food-link">{name}</Link>
                    <span>Quantity: {quantity}</span>
                  </section>
                </section>
                <span className="price">
                  ${(parseFloat(price) * quantity).toFixed(2)}
                </span> 

              </section> */}
              {this.renderOrderShowItems()}
            </section>
            <section className="col-3-8 order-info">
              <h3>Pickup Time:</h3>
              <span>{pickupTime}</span>
              <h3>Order Notes:</h3>
              <textarea
                className="order-notes"
                value={this.state.notes}
                onChange={this.changeNotes}
                cols="30"
                rows="10"
              ></textarea>
            </section>
          </div>
          {/* <input type="text" value={this.state.notes} onChange={this.changeNotes}/> */}
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

export default withRouter(OrderShow);
