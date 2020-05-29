import React from "react";
import axios from 'axios';
import "../styles/listen.css";
import "bootstrap/dist/css/bootstrap.min.css";

// const headphones=require('../assets/headphones.jpg')
class Listen extends React.Component{
  state={
    videos:[],
  }

  //on select to listen to a specific video
  onSubmit=(e)=>{
    console.log('Button was clicked');
    axios({
      method: 'get',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        maxResults: 8,
        videoDefinition: 'high',
        type: 'video',
        videoEmbeddable: 'true',
        key: 'AIzaSyCb9A4kjrypWw84UxCN6AwnagElm_90OlU', 
        q: this.state.searchInput,
        pageToken: ''
      }
    })
    .then(response => {
      this.setState({ videos: response.data.items })
    })
  }
  render(){
    return (<>
   <div className="container">
        <div className="row">
          <div className="col-4 bottomline">Martinez Brothers</div>
          
        </div>

        <div className="row">
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Listen
              </a>
            </div>
          </div>

       
        </div>
      </div>


    </>)
  }
};
export default Listen;
