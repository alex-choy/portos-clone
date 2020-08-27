import React from "react";
import { withRouter } from "react-router-dom";

class OrderShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.changeNotes = this.changeNotes.bind(this);
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


  changeNotes(e) {
    this.setState({ notes: e.target.value });
  }

  render() {
    if (Object.keys(this.props.foodItems).length && this.props.order 
            && this.props.orderedFoodItems && Object.keys(this.state).length){
      const { foodItems, 
              order: { id: orderId, pickup_time: pickupTime }, 
              orderedFoodItems } = this.props;
      
      // 
      const { food_item_id, quantity } = orderedFoodItems[0];
      const foodItem = foodItems[food_item_id];
      const { photo_url } = foodItem;

      return (
        <div className="order-show-wrapper">
          <h1 className="order-title">Order #{orderId}</h1>
          <div className="content-wrapper">
            <section className="col-5-8 ordered-items">
              <h2 className="top-box order-summary">Order Summary</h2>
              <section className="order-item-receipt">
                <img src={photo_url} alt=""/>
              </section>
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
