import React from 'react';
import { Link } from 'react-router-dom';

class FoodShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getFoodItem(this.props.match.params.foodId);
  }

  render () {
    if(!this.props.foodItem) {
      return null;
    } else {
      const { name, photo_url, description, price } = this.props.foodItem;
      return (
        <div className="food-show avoid-masthead">
          <section className="food-display cf">
            <img className="food-show-img food-display-child" src={photo_url} alt=""/>
            <article className="food-show-info food-display-child">
              <h1>{name}</h1>
              <hr/>
              <br/>
              <p>${parseFloat(price).toFixed(2)} each</p>
              <h3>Description</h3>
              <p>{description}</p>
              <Link to="/order" className="to-order-page">Order Now!</Link>
            </article>
          </section>
          <Link to="/menu" className="to-menu-index">Back to Menu</Link>
        </div>
      );
    }
  }
};

export default FoodShow;