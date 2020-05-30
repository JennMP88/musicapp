import React from 'react';
import Video from "../components/video";

class VideoDisplay extends React.Component {

  render(){
    return(
    <Video id={this.props.match.params.id} />
  )


}
}

export default VideoDisplay;