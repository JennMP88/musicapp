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

                <h1>this</h1>
                <h1>this</h1>
                <h1>this</h1>
                <h1>this</h1>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
