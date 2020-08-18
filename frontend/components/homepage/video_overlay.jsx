import React from "react";

class VideoOverlay extends React.Component {
  render() {
    return (
      // chrome allows autoplay only if muted
      <video width="100%" autoPlay muted>
        <source
          src="https://www.portosbakery.com/wp-content/uploads/2018/05/DesktopOptimizedVideo.mp4"
          type="video/mp4"
        />
        This video can't be played
      </video>
    );
  }
}

export default VideoOverlay;
