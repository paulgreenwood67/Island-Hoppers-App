import React from "react";
import "./headerhop.css";
import headerhop from '../../images/headerhop.jpg';


// Use headerImage in your code


//function providing a loction for the main image (imported from a URL in in the associated CSS file)
export default function Header() {
  return (
  
      <div className="header">
        <div>
        <img src={headerhop} className="headerImg hide1" alt="My Image" />
        <img src={headerhop} className="headerImg hide2" alt="My Image" />
        </div>
      </div>
    
  );
}
