import React from 'react';


const VideoDisplay = ({id}) => {
  
  const link = `https://www.youtube.com/embed/${id}?autoplay=1&fs=1&origin=http://localhost:3002`;
  console.log('myid',id)
  return (
    
    <iframe title='yt-video' type="text/html" width="640" height="360"
     src={link} frameBorder="0"></iframe>
  );
}

export default VideoDisplay;