import React from "react";
import "./header.css";

//function providing a loction for the main image (imported from a URL in in the associated CSS file)
export default function Header() {
  return (
    <div className="header">
      <div>
        <div className="headerImg"></div>
      </div>
    </div>
  );
}
