import React from 'react';
import "../styles/navbar.css"
import {Link} from 'react-router-dom'



const Navbar=(props)=>{
return(
<>
<nav>
  <ul class="navigation">
    <li>
      <Link className="page" to="/about">About</Link>
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