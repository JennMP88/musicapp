import React from 'react';
import "./footer.css"
import {Link} from 'react-router-dom'

const instagram=require('./assets/instagram.png')
const twitter=require('./assets/twitter.png')
const facebook=require('./assets/fb.png')

const Footer=(props)=>{
return(
<>
<footer>
  <ul className="footer">
    <li>
      <Link className="page" to="/"><img src={instagram} alt="..."  width="55" /></Link>
    </li>

    <li>
    <Link className="page" to="/"><img src={twitter} alt="..."  width="58" /></Link>
    </li>

    <li>
    <Link className="page" to="/"><img src={facebook} alt="..."  width="100" /></Link>
    </li>
     
  </ul>

</footer>
</>
)
}
export default Footer;