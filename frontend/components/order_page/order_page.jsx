import React from "react";
import OrderPageItem from "./order_page_item";
import Modal from "../shared_components/popup_modal";
import ShoppingCart from "./shopping_cart/shopping_cart";

export const SHOPPING_CART = "shoppingCart";

class OrderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
    };

    this.itemClick = this.itemClick.bind(this);
    // this.addItemToCart = this.addItemToCart.bind(this);
    this.renderEachCategory = this.renderEachCategory.bind(this);
    this.renderAllItemsByCategory = this.renderAllItemsByCategory.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  componentDidMount() {
    let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
    this.props.getLocalShoppingCart(shoppingCart);
    this.props
      .getCategoriesAndFoodItems()
      .then(() => this.setState({ filteredCategories: this.props.categories }));
  }

  itemClick(foodId) {
    event.preventDefault();
    this.props.openOrderItemModal();
    this.props.setOrderItemModalId(foodId);
  }

  toTitleCasePlural(phrase) {
    let titleCased = phrase
      .toLowerCase()
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    if (titleCased.charAt(titleCased.length - 1) === "y") {
      titleCased = titleCased.slice(0, titleCased.length - 1) + "ie";
    }
    return titleCased + "s";
  }

  changeInput(e) {
    this.setState({ userInput: e.target.value.toLowerCase() }, () => {
      const { userInput } = this.state;
      const { foodItems } = this.props;
      const newFilteredCats = { ...this.props.categories };
      for (const category in newFilteredCats) {
        const foodCategory = this.toTitleCasePlural(category).toLowerCase();
        if (foodCategory.includes(userInput)) continue;

        newFilteredCats[category] = newFilteredCats[category].filter(
          (foodId) => {
            const foodName = foodItems[foodId].name.toLowerCase();

            return foodName.includes(userInput);
          }
        );
      }
      this.setState({ filteredCategories: newFilteredCats });
    });
  }

  /**
   * Given foodIds that belong to a category, make items for each foodId
   * @param {Number Array} foodIds
   */
  renderEachCategory(foodIds) {
    const { foodItems } = this.props;
    let categoryEles = [];
    foodIds.forEach((id) => {
      const foodItem = foodItems[id];
      categoryEles.push(
        <OrderPageItem
          key={id}
          foodItem={foodItem}
          itemClick={this.itemClick}
        />
      );
    });
    return categoryEles;
  }

  /**
   * Grab React state food items
   */
  renderAllItemsByCategory() {
    let categories = [];
    for (const category in this.state.filteredCategories) {
      const foodIds = this.state.filteredCategories[category];
      const categoryEles = this.renderEachCategory(foodIds);
      if (categoryEles.length) {
        let categoryName = category;
        categories.push(
          <div className={`category ${category} cf`} key={category}>
            <h2 className="category-title">
              {this.toTitleCasePlural(categoryName)}
            </h2>
            <hr />
            <section className="category-items-wrapper">{categoryEles}</section>
          </div>
        );
      }
    }
    if(categories.length > 0) return categories;
    return <div className="no-results"><span>No Results</span></div>
  }

  render() {
    if (this.props.foodItems && this.state.filteredCategories) {
      return (
        <div className="order-page">
          <h1 className="page-header">ORDER PAGE</h1>
          <div className="order-page-wrapper">
            <section className="search-food order-search-food">
              <i
                id="order-fa-search"
                className="fa fa-search"
                aria-hidden="true"
              ></i>
              <input
                type="text"
                className="search-bar"
                placeholder="Search..."
                onChange={this.changeInput}
              />
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
