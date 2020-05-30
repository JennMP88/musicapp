import React, {Component} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
// import Video from "../containers/videocard";
import "../styles/listen.css";
import "bootstrap/dist/css/bootstrap.min.css";


class Listen extends Component {
  state = {
    videos: [],
   
  };

  //on select to listen to a specific video
  loadVideos = (e) => {
    axios({
      method: "get",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: 1,
        videoDefinition: "high",
        type: "video",
        videoEmbeddable: "true",
        // key: ,
        q: "martinez+brothers",
        pageToken: "",
      },
    }).then((response) => {
      let queryCopy = [...response.data.items];
      this.setState({ videos: queryCopy });
      console.log("here", this.state.videos);
    });
  };
  // renders videos to display thumbnails
  componentDidMount() {
    let query = this.state.videos;
    this.loadVideos(query);
  }


  render() {
    console.log("video", this.state.videos);
    
    return (
      
      <>
        <div className="container">
          <div className="row">
            <div className="col-4 bottomline">Martinez Brothers</div>
          </div>

          <div className="row row-cols-4" >
            {/* map me */}
            {this.state.videos.map((e, i) => {
              return (
                <div key={e.id}>
                  <div className="card videocard" >
                    <img
                      src={e.snippet.thumbnails.default.url}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title ">{e.snippet.title}</h5>
                      <p className="card-text">{e.snippet.title}</p>
                      <button
                        onClick={this.onSubmit}
                        className="btn btn-primary"
                      >
                         <Link to={'/listen/'+ e.id.videoId}>Listen</Link>
                        

                      </button>
                    </div>
                   
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
export default Listen;
