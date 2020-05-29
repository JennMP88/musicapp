import React from "react";
import axios from "axios";
import VideoCard from "../containers/videocard";
import "../styles/listen.css";
import "bootstrap/dist/css/bootstrap.min.css";


class Listen extends React.Component {
  state = {
    videos: [],
  };

  //on select to listen to a specific video
  loadVideos = (e) => {
    console.log(e.target, "Button was clicked");
    axios({
      method: "get",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: 20,
        videoDefinition: "high",
        type: "video",
        videoEmbeddable: "true",
        key: "AIzaSyCMTSxecKAzvOEiyp9TFjtV7ekhGApFCBA",
        q: "martinez+brothers",
        pageToken: "",
      },
    }).then((response) => {
      let queryCopy = [...response.data.items];
      this.setState({ videos: queryCopy });

      console.log("here", this.state.videos);
    });
  };
  componentDidMount() {
    let query = this.state.videos;
    this.loadVideos(query);
  }

  render() {
    console.log("vid", this.state.videos);

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-4 bottomline">Martinez Brothers</div>
          </div>

          <div className="row row-cols-4">
            {/* map me */}
            {this.state.videos.map((e, i) => {
              return (
                <div>
                  <div className="card videocard" style={{ width: "18rem" }}>
                    <img
                      src={e.snippet.thumbnails.default.url}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{e.snippet.title}</h5>
                      <p className="card-text">{e.snippet.title}</p>
                      <button
                        onClick={this.onSubmit}
                        className="btn btn-primary"
                      >
                        Listen
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
