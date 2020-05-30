import React from 'react';
import VideoDisplay from '../components/video';

class Reuseable extends React.Component {

  state = {

  }
render(){
  return(
<div className="container">
<div className="row">
  <div className="col-4 bottomline">Martinez Brothers</div>
</div>

<div className="row">

    
    {this.state.videos.map((e, i) => {
      return (
        <div className="col-sm-3">
        <VideoCard
          id={e.id.videoId}
          image={e.snippet.thumbnails.medium.url}
          title={e.snippet.title}
        />
           </div>
      );
    })}

</div>
</div>

  )}
}
export default Reuseable;