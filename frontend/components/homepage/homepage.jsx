import React from "react";
import VideoOverlay from "./video_overlay";
import OrderModalContainer from "./order_modal_container";
import HomepagePhotos from "./homepage-photos";

class Homepage extends React.Component {
  componentDidMount() {
    this.props.openOrderModal();
  }

  render() {
    return (
      <section>
        <VideoOverlay />
        <OrderModalContainer />
        <HomepagePhotos />
      </section>
    );
  }
}

export default Homepage;
