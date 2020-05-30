import React from 'react';
import VideoDisplay from '../components/video';

class VideoPlayer extends React.Component {

  state = {

  }
render(){
  return(
<>
<VideoDisplay id={this.props.match.params.id} />
</>

  )
  
}
  }
export default VideoPlayer;
