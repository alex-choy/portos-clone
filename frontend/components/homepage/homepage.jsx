import React from 'react';
import VideoOverlay from "./video_overlay";
import OrderModalContainer from './order_modal_container';

class Homepage extends React.Component {
  componentDidMount() {
    this.props.openOrderModal();
  }

  render() {
    return (
      <div>
        <VideoOverlay />
        <OrderModalContainer />
        {/* <img
          src="https://porosnax-dev.s3-us-west-1.amazonaws.com/abraham-cisneros-0xxCRrgFrXk-unsplash.jpg"
          alt="doesn't work"
        /> */}
      </div>
    ); 
  }
};

export default Homepage;