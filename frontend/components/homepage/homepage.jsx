import React from "react";
import VideoOverlayContainer from "./video_overlay_container";
import OrderModalContainer from "./order_modal_container";
import HomepagePhotos from "./homepage-photos";

class Homepage extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
    this.props.openOrderModal();
  }

  render() {
    return (
      <section>
        <VideoOverlayContainer />
        <OrderModalContainer />
        <HomepagePhotos />
      </section>
    );
  }
}

export default Homepage;
