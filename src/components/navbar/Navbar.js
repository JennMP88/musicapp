import React from 'react';
import "./navbar.css"
import {Link} from 'react-router-dom'



const Navbar=(props)=>{
return(
<>
<nav>

 
  <ul className="navigation">
    <li>
      <Link className="page" to="/">Home</Link>
    </li>

    <li>
      <Link className="page" to="/listen">Listen</Link>
    </li>

    <li>
      <Link className="page" to="/genres">Genres</Link>
    </li>
   
     
  </ul>

</nav>
</>
)
}
export default Navbar;