import React from 'react';


const VideoDisplay = ({id}) => {
  
  
  const link = `https://www.youtube.com/embed/${id}?autoplay=1&fs=1&origin=http://localhost:3002`;
  console.log('myid',id)

  return (
    <div style={{minHeight:"95vh"}}>
  
  <iframe title='yt-video' type="text/html" width="500" height="360"  
  // width="640"
     src={link} frameBorder="0"></iframe>
  </div>

  );
}

export default VideoDisplay;