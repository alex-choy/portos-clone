import React from "react";

class VideoOverlay extends React.Component {
  render() {
    // play video when we close the modal
    // const { homepageOrderModalOpen } = this.props.homeOrderModal;
    return (
      // chrome allows autoplay only if muted
      <video width="100%" muted loop playsInline>
        <source
          src="https://porosnax-dev.s3-us-west-1.amazonaws.com/baked-goods.mp4"
          type="video/mp4"
        />
        This video can't be played
      </video>
    );
  }
}

export default VideoOverlay;
