import React from "react";
import axios from 'axios';
import VideoCard from '../containers/videocard';
import "../styles/listen.css";
import "bootstrap/dist/css/bootstrap.min.css";

// const headphones=require('../assets/headphones.jpg')
class Listen extends React.Component{
  state={
    videos:[],
    name:''
  }

  //on select to listen to a specific video
  onSubmit=(e)=>{
    console.log(e.target,'Button was clicked');
    axios({
      method: 'get',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        maxResults: 4,
        videoDefinition: 'high',
        type: 'video',
        videoEmbeddable: 'true',
        key: 'AIzaSyCMTSxecKAzvOEiyp9TFjtV7ekhGApFCBA', 
        q: this.state.searchInput,
        pageToken: ''
      }
    })
    .then(response => {
      let queryCopy = [...response.data.items]
      this.setState({ videos: queryCopy })
      
      console.log('here',this.state.videos)
    
    })
  }
  render(){
    console.log('vid',this.state.videos)
    // const results = <div className='row'>
    //   {
    //     this.state.videos.map((e, i) => {
    //       return <VideoCard id={e.id.videoId} image={e.snippet.thumbnails.medium.url} title={e.snippet.title} />;
    //     })
    //   }
    // </div>
    
    return (<>
   <div className="container">
        <div className="row">
          <div className="col-4 bottomline">Martinez Brothers</div>
          
        </div>

        <div className="row row-cols-4">

{/* map me */}
{this.state.videos.map((e,i)=>{
  console.log('a vid',e)
  return <div>
    {<img src={e.snippet.thumbnails.default.url} alt='vid' />}
    </div>
})}
     
  {/* here */}
         

        </div>

        
        
      </div>


    </>)
  }
};
export default Listen;
