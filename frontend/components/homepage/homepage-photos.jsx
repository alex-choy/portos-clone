import React from 'react';
import { Link } from 'react-router-dom';

const HomepagePhotos = () => {

  return (
    <section className="homepage-photos cf">
      <section className="homepage-photo-wrapper">
        <img className="homepage-photo" src="https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/ddp-QnQSxrXFgnw-unsplash.jpg" alt="Country Bread" />
        <section className="photo-info">
          <div className="photo-text">
            Hey What's Up Hello
            <Link to="/menu/20"></Link>
          </div>
        </section>
      </section>
      <section className="homepage-photo-wrapper">
        <img className="homepage-photo" src="https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/corleto-peanut-butter-HIXCrSevIKQ-unsplash.jpg" alt="Cookies" />
        <section className="photo-info">
          <div className="photo-text">
            Hey What's Up Hello
            <Link to="/menu/20"></Link>
          </div>
        </section>
      </section>
    </section>
  );
};

export default HomepagePhotos;