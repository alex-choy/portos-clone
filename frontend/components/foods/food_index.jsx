import React from 'react';
import FoodIndexItem from './food_index_item';

class FoodIndex extends React.Component {
  componentDidMount() {
    // get all food items from DB
    this.props.getFoodItems();
  }

  createFoodItems() {
    return this.props.foodItems.map((foodItem) => (
      <FoodIndexItem key={foodItem.id} foodItem={foodItem}/>
    ));
  }

  render() {
    return (
      <div className="food-card-list">
        {this.createFoodItems()}
      </div>
    );
  }
}

export default FoodIndex;

