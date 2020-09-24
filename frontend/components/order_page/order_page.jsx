import React from 'react';
import OrderPageItem from "./order_page_item";
import Modal from '../shared_components/popup_modal';
import ShoppingCart from './shopping_cart/shopping_cart';

export const SHOPPING_CART = "shoppingCart";

class OrderPage extends React.Component {
  constructor(props) {
    super(props);

    this.itemClick = this.itemClick.bind(this);
    // this.addItemToCart = this.addItemToCart.bind(this);
    this.renderEachCategory = this.renderEachCategory.bind(this);
    this.renderAllItemsByCategory = this.renderAllItemsByCategory.bind(this);
  }

  componentDidMount() {
    let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    this.props.getLocalShoppingCart(shoppingCart);
    this.props.getCategoriesAndFoodItems();
  }

  itemClick(foodId) {
    event.preventDefault();
    this.props.openOrderItemModal();
    this.props.setOrderItemModalId(foodId);
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
        let categoryName = category;
        const categoryNameLen = categoryName.length;
        if(categoryName.charAt(categoryNameLen - 1) === "y") {
          categoryName = categoryName.slice(0, categoryNameLen - 1) + "ie";
        }
        items.push(
          <div className={`category ${category} cf`} key={category}>
            <h2 className="category-title">{this.toTitleCase(categoryName)}s</h2>
            <hr/>
            <section className="category-items-wrapper">{categoryEles}</section>
          </div>
        );
      }
    }

    return items;
  }

  render() {
    if (this.props.foodItems && this.props.categories) {
      return (
        <div className="order-page">  
          <h1 className="page-header">ORDER PAGE</h1>
          <div className="order-page-wrapper">
            <section className="search-food order-search-food">
              <i id="order-fa-search" className="fa fa-search" aria-hidden="true"></i>
              <input type="text" className="search-bar" placeholder="Search..." onChange={this.changeInput} />
            </section>
            <section className="order-items">
              {this.renderAllItemsByCategory()}
            </section>
            <aside className="shopping-cart">
              <ShoppingCart />
            </aside>
            <Modal />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default OrderPage;