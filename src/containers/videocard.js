
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const VideoCard = ({ image, title, id }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="card videocard">
              <img src={image} className="card-img-top" alt="thumbnail" />
              <div className="card-body">
                <p className="card-title ">{title}</p>

                <Link to={"/listen/" + id}>
                  <button className="btn btn-primary">Listen</button>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;

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

