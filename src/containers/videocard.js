import React from 'react';
import { Link } from 'react-router-dom';


const VideoCard = ({ image, title, id }) => {

  return (



    
    <div className='col-6'>
      <Link to={'/video/'+id}><img src={image} alt='' style={{width: '100%', height: 'auto'}} /></Link>
      <h5>{title}</h5>
    </div>
  );
}

export default VideoCard;