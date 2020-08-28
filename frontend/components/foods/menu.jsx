import React from 'react';
import FoodIndexContainer from './food_index_container';
import MenuAside from './menu_aside';

class Menu extends React.Component {

  render() {
    return (
      <section className="avoid-masthead">
        {/* picture, 270px height, 100% width */}
        {/* 20-25% left nav-bar for sorting? */}
        {/* 75-80% right menu grid */}
        {/* <aside className="col col-1-5">
          <MenuAside />
        </aside> */}
        <section className="food-index-wrapper">
          <FoodIndexContainer />
        </section>
      </section>
    );
  }
}
export default Menu;