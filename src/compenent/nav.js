import React, { useRef } from "react";
import { Link } from "react-router-dom";
import '../compenent/nav.css';

function Nav()
{
  
    return(
    <div className="navbar">
      <Link to={"/"}>React Hooks Checkpoint</Link>
      <a >*</a>
      <a >*</a>
    </div>
    );
}
export default Nav;