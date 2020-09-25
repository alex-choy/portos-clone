import React from "react";
// import bakedGoodsVideo from 'app/assets/videos/baked-goods.mp4';

class VideoOverlay extends React.Component {

  componentDidMount() {
    const video = document.getElementById("homepage-video");
    video.pause();
  }

  render() {
    // play video when we close the modal
    return (
      // chrome allows autoplay only if muted
      <video id="homepage-video" width="100%" muted loop playsInline autoPlay>
        <source
          src="https://porosnax-dev.s3-us-west-1.amazonaws.com/food_items/baked-goods.mp4"
          type="video/mp4"
        />
        This video can't be played
      </video>
    );
  }
}

export default VideoOverlay;
