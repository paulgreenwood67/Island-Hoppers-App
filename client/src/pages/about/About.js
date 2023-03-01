import React from "react";
import "./about.css";
import { Link } from "react-router-dom";

//function for the about page
export default function About() {
  return (
    <div className="about">
      <div className="aboutWrapper">
        <h1 className="aboutTitle">ABOUT ISLAND HOPPERS</h1>
        <h4 className="aboutDesc">
         Welcome to <span>ISLAND HOPPERS</span>.
        </h4>
        <p>
          <span>Island Hoppers</span> is a blogging platform which provides you
          the opportunity to post reviews about the amazing islands you have visited in Greece.
          We call our blogs <span> 'hops'</span> and if you join us then you will become a <span>'hopper'</span>.
          So, hop onboard and tell us about the your adventures around the beautiful islands of Greece.
        </p>
        <h2>Want to write a hop?</h2>
        <Link to="/write">
          <button>Hop over here</button>
        </Link>
      </div>
    </div>
  );
}
