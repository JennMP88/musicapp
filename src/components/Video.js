import React from "react";
import VideoPlayer from "../components/videoplayer";

class Video extends React.Component {
  state = {
    name: "",
  };

  render() {
    console.log("things");

    return (
      <>
        <VideoPlayer id={this.props.match.params.id} />
      </>
    );
  }
}

export default Video;
