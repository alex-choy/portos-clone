import React from 'react';
import FoodIndexContainer from './food_index_container';
import MenuAside from './menu_aside';

class Menu extends React.Component {
  render() {
    return (
      <section className="avoid-masthead">
        <section className="food-index-wrapper">
          <h1 className="page-header">MENU</h1>
            <FoodIndexContainer />
        </section>
      </section>
    );
  }
}
export default Menu;