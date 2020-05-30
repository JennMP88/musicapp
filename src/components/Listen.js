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
        maxResults: 4,
        videoDefinition: "high",
        type: "video",
        videoEmbeddable: "true",
        key: "AAIzaSyA_zQkJysywrfO6Qc2ohAJOZrWAzxISb_4",
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

          <div className="row">
            <div className="col-sm">
              {this.state.videos.map((e, i) => {
                return (
                  <VideoCard
                    id={e.id.videoId}
                    image={e.snippet.thumbnails.medium.url}
                    title={e.snippet.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
        {/* </div> 
          </div>  */}
      </>
    );
  }
}
export default Listen;
