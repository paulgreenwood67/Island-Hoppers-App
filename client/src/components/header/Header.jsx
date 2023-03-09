import React from "react";
import "./header.css";
import header from '../../images/header.webp';
import headeralt from '../../images/headeralt.webp';

// Use headerImage in your code


//function providing a loction for the main image (imported from a URL in in the associated CSS file)
export default function Header() {
  return (
  
      <div className="header">
        <div>
        <img src={header} className="headerImg hide1" alt="My Image" />
        <img src={headeralt} className="headerImg hide2" alt="My Image" />
        </div>
      </div>
    
  );
}
