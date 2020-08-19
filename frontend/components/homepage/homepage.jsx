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
      </div>
    ); 
  }
};

export default Homepage;