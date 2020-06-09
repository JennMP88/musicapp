import React from 'react';
import VideoDisplay from './video';


class VideoPlayer extends React.Component {

  state = {

  }

render(){
  return(
<div style={{minHeight:"95vh"}}>
<VideoDisplay 
title={this.props.match.params.title}
id={this.props.match.params.id} />
</div>

  )
  
}
  }
export default VideoPlayer;
