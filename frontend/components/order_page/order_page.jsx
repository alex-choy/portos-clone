import React from 'react';
import OrderPageItem from "./order_page_item";
import Modal from '../session_forms/popup_modal';

class OrderPage extends React.Component {
  constructor(props) {
    super(props);

    this.renderAllItemsByCategory = this.renderAllItemsByCategory.bind(this);
    this.renderEachCategory = this.renderEachCategory.bind(this);
    this.itemClick = this.itemClick.bind(this);
  }

  componentDidMount() {
    this.props.getCategoriesAndFoodItems();
  }

  itemClick(foodId) {
    event.preventDefault();
    this.props.openOrderItemModal();
    this.props.setOrderItemModalId(foodId);
    // console.log(e.target.className);
  }

  toTitleCase(phrase) {
    return phrase
      .toLowerCase()
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  renderEachCategory(foodIds) {
    const foodItems = this.props.foodItems;
    let categoryEles = [];
    foodIds.forEach((id) => {
      const foodItem = foodItems[id];
      categoryEles.push(<OrderPageItem key={id} foodItem={foodItem} itemClick={this.itemClick} />);
    });
    return categoryEles;
  }

  renderAllItemsByCategory() {
    let items = [];
    for (const category in this.props.categories) {
      const foodIds = this.props.categories[category];
      const categoryEles = this.renderEachCategory(foodIds, category);
      if (categoryEles.length) {
        items.push(
          <div className={`category ${category} cf`} key={category}>
            <h2 className="category-title">{this.toTitleCase(category)}s</h2>
            <hr/>
            <section className="category-items-wrapper">{categoryEles}</section>
          </div>
        );
        // items.push(categoryEles);
      }
    }

    return items;
  }

  render() {
    if (this.props.foodItems && this.props.categories) {
      return (
        <div className="order-page-wrapper">
          <section className="order-items">
            {this.renderAllItemsByCategory()}
          </section>
          <Modal />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default OrderPage;