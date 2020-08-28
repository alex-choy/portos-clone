import React from "react";
import { withRouter, Link } from "react-router-dom";
import OrderShowItem from "./order_show_item";
import OrderShowInfo from "./order_show_info";
import regeneratorRuntime from "regenerator-runtime";

class OrderShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };

    this.changeNotes = this.changeNotes.bind(this);
    this.renderOrderShowItems = this.renderOrderShowItems.bind(this);
    this.getTotalPrice = this.getTotalPrice.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.props.getOrder(this.props.match.params.orderId)
      .then(() =>{
        const { notes, pickup_time, id } = this.props.order;
        this.setState({
          notes,
          pickup_time,
          id
        })
      }).then(() =>
        this.props.getFoodItems()
      ).then(() =>
        this.props.fetchOrderedFoodItems(this.props.match.params.orderId)
      );
  }

  componentDidUpdate(previousProps) {
    if (previousProps.match.params.orderId != this.props.match.params.orderId) {
      this.props.getOrder(this.props.match.params.orderId)
        .then(() => {
          const { notes, pickup_time, id } = this.props.order;
          this.setState({
            notes,
            pickup_time,
            id,
          });
        })
        .then(() => this.props.getFoodItems())
        .then(() =>
          this.props.fetchOrderedFoodItems(this.props.match.params.orderId)
        );
    }
  }

  changeNotes(e) {
    this.setState({ notes: e.target.value });
  }

  handleUpdate() {
    const order = {...this.state};
    this.props.updateOrder(order)
      .then(() => alert("Your notes have been updated!"));
  }

  renderOrderShowItems() {
    const { orderedFoodItems, foodItems } = this.props;
    const orderShowItems = orderedFoodItems.map(
      ({ food_item_id: foodId, quantity }) => {
        const { photo_url: imgUrl, name, price } = foodItems[foodId];
        return (
          <OrderShowItem
            key={foodId}
            imgUrl={imgUrl}
            name={name}
            price={price}
            foodId={foodId}
            quantity={quantity}
          />
        );
      }
    );

    return orderShowItems;
  }

  getTotalPrice() {
    const { foodItems, orderedFoodItems } = this.props;
    let totalPrice = 0;
    orderedFoodItems.map(({ food_item_id, quantity }) => {
      totalPrice += parseFloat(foodItems[food_item_id].price) * quantity;
    });
    return totalPrice.toFixed(2);
  }

  render() {
    // console.log(this.state.notes);
    const { foodItems, order, orderedFoodItems, deleteOrder, errors } = this.props;
    const foodItemsLen = Object.keys(foodItems).length;
    const ordFoodItemsLen = Object.keys(orderedFoodItems).length;
    const stateLen = Object.keys(this.state).length;

    if (order && foodItemsLen && ordFoodItemsLen && stateLen) {
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
              updateNotes={this.handleUpdate}
            />
          </div>
          <div className="order-btns">
            <Link to="/account">Back to Orders</Link>
            <button
              className="delete-order"
              onClick={() => deleteOrder(order.id)}
            >
              Delete Order
            </button>
          </div>
        </div>
      );
    } else if (errors.length) {
      return (
        <div className="errors">
          <div className="errors-wrapper">
            <h1>ERROR:</h1>
            {errors}
          </div>
          <Link to="/account">See your orders here!</Link>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

export default withRouter(OrderShow);
