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
          <Link to="/menu" className="menu-index">Back to Menu</Link>
          <section className="food-display">
            <img className="show-food-img food-display-child" src={photo_url} alt=""/>
            <article className="show-food-info food-display-child">
              <h1>{name}</h1>
              <br/>
              <hr/>
              <br/>
              <p>${parseFloat(price).toFixed(2)} each</p>
              <h3>Description</h3>
              <p>{description}</p>
            </article>
          </section>
        </div>
      );
    }
  }
};

export default FoodShow;