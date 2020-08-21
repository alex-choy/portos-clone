import React from 'react';
import OrderPageItem from "./order_page_item";

class OrderPage extends React.Component {
  constructor(props) {
    super(props);

    this.renderItemsByCategory = this.renderItemsByCategory.bind(this);
    this.renderEachCategory = this.renderEachCategory.bind(this);
  }

  componentDidMount() {
    // this.props.getCategories();
    this.props.getCategoriesAndFoods();
  }

  renderEachCategory(foodIds) {
    const foodItems = this.props.foodItems;
    let categoryEles = [];
    foodIds.forEach((id) => {
      const foodItem = foodItems[id];
      console.log('id: ', id);
      console.log('foodItems: ', foodItems);
      categoryEles.push(<OrderPageItem key={id} foodItem={foodItem} />);
    });
    return categoryEles;
  }

  renderItemsByCategory() {
    console.log('reder item cat');
    let items = [];
    for (const category in this.props.categories) {
      const foodIds = this.props.categories[category];
      const categoryEles = this.renderEachCategory(foodIds);
      items.push(<div key={category}>{categoryEles}</div>);
    }

    return items;
  }

  render() {
    console.log("foodItems: ", this.props.foodItems);
    // if(this.props.foodItems.length > 0 && this.props.categories.length > 0) {
    //   console.log('both > 0');
    //   return (
    //     <div>
    //       {this.renderItemsByCategory()}
    //     </div>
    //   );
    // } else {
    //   return null;
    // }

    return <div>{this.renderItemsByCategory()}</div>;
  }
}

export default OrderPage;