import React from 'react';

class FoodIndex extends React.Component {
  componentDidMount() {
    // get all food items from DB
    this.props.getFoodItems();
  }

  render() {
    return (
      <div className="menu">
        {this.props.foodItems.length}
        {/* picture, 270px height, 100% width */}
        {/* 20-25% left nav-bar for sorting? */}
        {/* 75-80% right menu grid */}
      </div>
    );
  }
}

export default FoodIndex;