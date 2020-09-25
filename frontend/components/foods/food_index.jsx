import React from 'react';
import FoodIndexItem from './food_index_item';

class FoodIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredFoodItems: props.foodItems,
      userInput: ""
    }
    this.changeInput = this.changeInput.bind(this);
  }
  componentDidMount() {
    this.props.getFoodItems();
  }

  changeInput() {
    event.preventDefault();
    this.setState({
      userInput: event.target.value,
      filteredFoodItems: this.props.foodItems.filter(foodItem => {
        return foodItem.name.toLowerCase().includes(event.target.value);
      })
    })
  }

  createFoodItems() {
    let currFoodItems;
    if(this.state.userInput === "") {
      currFoodItems = this.props.foodItems;
    } else {
      currFoodItems = this.state.filteredFoodItems;
    }
    if(currFoodItems.length < 1) {
      return <div><span>No results</span></div>
    }
    return currFoodItems.map((foodItem) => (
      <FoodIndexItem key={foodItem.id} foodItem={foodItem}/>
    ));
  }

  render() { 
    if(this.props.foodItems.length > 0) {
      return (
        <div className="food-card-list cf">

          <section className="search-food">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input type="text" className="search-bar" placeholder="Search..." onChange={this.changeInput}/>
          </section>
          {this.createFoodItems()}
        </div>
      );
    } 
    return <div><span>Loading...</span></div>
  }
}

export default FoodIndex;

