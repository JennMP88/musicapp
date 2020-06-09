import React, { Component } from "react";
import axios from "axios";
import VideoCard from "../videoplayer/videocard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./listen.css";
import apikey from "./api"

class Listen extends Component {
  state = {
    videos: {}, 
    artist: ["Martinez Brothers", "Paul Kalkbrenner","Dennis Ferrer"],
  };

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
        key: apikey, 
        q: artist,
        pageToken: "",
      },
    }).then((response) => {
      let queryCopy = [...response.data.items];
      console.log("thisss", queryCopy);
      // artist will be the key and queryCopy is result
      // {artistMartinez:[{result of axios}{video}{video}]=state}
      videos[artist]=queryCopy;
      this.setState({ videos });
      console.log("here", this.state.videos);
    });
  };

 

  // renders videos to display thumbnails
  componentDidMount() {
    this.state.artist.forEach((artistName) => {
      
      this.specificArtist(artistName);
    });
    
  }

  render() {

    const { artist, videos } = this.state;
    // until all videos and artist are not the same length don't render

    // 
    if (Object.keys(videos).length!==artist.length){
      return <div style={{minHeight:"95vh"}}></div>
    }
    console.log('there')
    return (
      <div style={{minHeight:"95vh"}}>
        {artist.map((artistName) => {
          return (
            <>
              <div className="container" >
                <div className="row">
                  <div className="col-4 bottomline">{artistName}</div>
                </div>
                <div className="row">
                  {videos[artistName].map((e) => {
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
     </div>
    );
  }
}
export default Listen;
