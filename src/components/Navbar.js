import React from 'react';
import "../styles/navbar.css"
import {Link} from 'react-router-dom'



const Navbar=(props)=>{
return(
<>
<nav>
  <ul class="navigation">
    <li><a href="#">About</a></li>
     <li><a href="#">Listen</a></li>
     <li><a href="#">Genre</a></li>
  </ul>

</nav>
</>
)
}
export default Navbar;