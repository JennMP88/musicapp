import React, { Component } from "react";
import axios from "axios";
import VideoCard from "../containers/videocard";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/listen.css";

class Listen extends Component {
  state = {
    videos: [],
    artist: ["Martinez Brothers", "Paul Kalkbrenner"],
  };

  // bigger function i have my input as my query, call this in all three areas
  specificArtist = (artist) => {
    const { videos } = this.state;
    return axios({
      method: "get",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: 1,
        videoDefinition: "high",
        type: "video",
        videoEmbeddable: "true",
        key: "AIzaSyDadpG0UKUoxSoP1Bsi2nuus7vanjRx3RA",
        q: artist,
        pageToken: "",
      },
    }).then((response) => {
      let queryCopy = [...response.data.items];
      console.log("thisss", queryCopy);
      videos.push(queryCopy);
      this.setState({ videos });
      console.log("here", this.state.videos);
    });
  };

  //on select to listen to a specific video

  // renders videos to display thumbnails
  componentDidMount() {
    this.state.artist.forEach((artistName) => {
      this.specificArtist(artistName);
    });
    // this.specificArtist("martinezbrothers")
  }

  render() {
    // console.log('responses', this.state.videos[0])
    const { artist, videos } = this.state;
    // until all videos and artist are not the same dont render
    if (videos.length!==artist.length){
      return <div></div>
    }
    console.log('there')
    return (
      <>
        {artist.map((artistName, i) => {
          return (
            <>
              <div className="container">
                <div className="row">
                  <div className="col-4 bottomline">{artistName}</div>
                </div>
                <div className="row">
                  {videos[i].map((e) => {
                    return (
                      <div className="col-sm-3">
                        <VideoCard
                          id={e.id.videoId}
                          image={e.snippet.thumbnails.medium.url}
                          title={e.snippet.title}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
              ;
            </>
          );
        })}
      </>
    );
  }
}
export default Listen;
