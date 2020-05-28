import React from 'react';
import "../styles/about.css"

const headphones=require('../assets/headphones.jpg')

const About=(props)=>{
return(
  <>
  <div class="about">
    <div class="row">

    <div class="col-1-of-3">
           <img src={headphones} alt="..." className="headphones"  />
     </div>

      <div class="col-2-of-3 info">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>

    </div>

    <div class="row">
      <h4 class="subheadline">Take a listen to today's new artist and hits</h4>
    </div>

    <div className="button">
      Listen
    </div>
 
  </div>
</>
)
}
export default About;