import React, {Component} from 'react';
import axios from "axios";
import VideoCard from "../containers/videocard";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/listen.css";



class Listen extends Component {

  state = {
    videos: [],
    // people:["martinez+brothers","paulkalkbrenner"]
   
  };

  // bigger function i have my input as my query, call this in all three areas
  specificArtist=(artist="martinez+brothers")=>{
  
      return axios({
        method: "get",
        url: "https://www.googleapis.com/youtube/v3/search",
        params: {
          part: "snippet",
          maxResults: 1,
          videoDefinition: "high",
          type: "video",
          videoEmbeddable: "true",
          key: "AIzaSyB6qSjRtjVMlBd8KpW-fP8IBeApweXE43U",
          q: artist,
          pageToken: "",
        },
      }).then((response) => {
        let queryCopy = [...response.data.items];
        this.setState({ videos: queryCopy });
        console.log("here", this.state.videos);
      });
   
  }

  //on select to listen to a specific video
 
  // renders videos to display thumbnails
  componentDidMount() {
    // let query = this.state.videos;
    // console.log("eww",query)
    this.specificArtist();
  }


  render() {
    console.log("video", this.state.videos);
    
    return (   
      <>
        <div className="container">
          <div className="row">
            <div className="col-4 bottomline">Martinez Brothers</div>
          </div>

          <div className="row">
         
              
              {this.state.videos.map((e, i) => {
                return (
                  <div className="col-sm-3">
                  <VideoCard
                    id={e.id.videoId}
                    image={e.snippet.thumbnails.medium.url}
                    title={e.snippet.title}
                  />
                     </div>
                     
                );
              })}
         
          </div>
        </div>
   

   {/* second  */}
 
      </>
    );
  }
}
export default Listen;
