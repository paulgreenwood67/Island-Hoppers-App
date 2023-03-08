import React from "react";
import "./header.css";

//function providing a loction for the main image (imported from a URL in in the associated CSS file)
export default function Header() {
  return (
  
      <div className="header">
        <div>
        <img src={"https://www.mailtravel.co.uk/images/greek-islands-hero-1"} className="headerImg" alt="My Image" />
        </div>
      </div>
    
  );
}
