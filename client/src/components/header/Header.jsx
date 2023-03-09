import React from "react";
import "./header.css";
import header from '../../images/header.webp';


//function providing a loction for the main image (imported from a URL in in the associated CSS file)
export default function Header() {
  return (
  
     <div className="header">
        <div>
        <img src={header} className="headerImg" alt="My Image" />
        </div>
      </div>
    
    
  );
}
