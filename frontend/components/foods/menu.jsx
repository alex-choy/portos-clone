import React from 'react';
import FoodIndexContainer from './food_index_container';

class Menu extends React.Component {

  render() {
    return (
      <section className="menu">
        {/* picture, 270px height, 100% width */}
        {/* 20-25% left nav-bar for sorting? */}
        {/* 75-80% right menu grid */}
        <aside className="col col-1-4">
          sidebar filler
          MAKE THIS BORDER-BOX AND FIT MARGINS IN HERE
        </aside>
        <section className="col col-3-4">
          <FoodIndexContainer />
        </section>
      </section>
    );
  }
}
export default Menu;