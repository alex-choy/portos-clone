import React from 'react';
import { Link } from 'react-router-dom';

class FoodShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log(this.props.match.params.foodId);
    console.log('COMPONENT MOUNTED');
    this.props.getFoodItem(this.props.match.params.foodId);
  }

  render () {
    console.log(this.props.foodItem);
    const { name, photo_url, description } = this.props.foodItem;
    return (
      <div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Link to="/menu">Back to Menu</Link>
        <h1>{name}</h1>
        <img className="show-food-img" src={photo_url} alt=""/>
        <p>{description}</p>
      </div>
    );
  }
};

export default FoodShow;