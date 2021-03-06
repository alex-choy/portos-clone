import React from 'react';
import { Link } from 'react-router-dom';

const HomepagePhotos = () => {

  return (
    <section className="homepage-photos cf">
      <section className="homepage-photo-wrapper">
        <Link className="photo-btn" to="/menu/7">Check it out!</Link>
        <img className="homepage-photo" src="https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/sourdough_bread.jpg" />
        <section className="photo-info">
          <div>
            <span className="photo-text">Artisan Sourdough Bread</span>
          </div>
        </section>
      </section>
      <section className="homepage-photo-wrapper">
        <Link className="photo-btn" to="/menu/2">Check it out!</Link>
        <img className="homepage-photo" src="https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/chocolate_cookies.jpg" alt="Cookies" />
        <section className="photo-info">
          <div>
            <span className="photo-text">Chocolate Cookies</span>
          </div>
        </section>
      </section>
    </section>
  );
};

export default HomepagePhotos;