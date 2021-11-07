import React from 'react';
import VideoDisplay from './video';
import "./videoplayer.css";


class VideoPlayer extends React.Component {

  state = {

  }

typeform=(e)=>{
console.log('form', e.target)
}

render(){
  return(
<div style={{minHeight:"95vh"}}>

<div class="video">

  <div class="vidpicked">
  <VideoDisplay 
id={this.props.match.params.id} />
</div>


  {/* <div class="forms">
    <h2>Post Comment</h2>
    <div class="commentbox"></div>
  </div>

<div class="formsdisplay">
    <h2>Comments</h2>
    <div class="comments"></div>
  </div> */}

  </div>


</div>



  )
  
}
  }
export default VideoPlayer;
