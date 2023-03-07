import React from "react";
import "./notFound404.css";

//function for the 404 message
export default function NotFound404() {
  return (
    <div className="center">
    <div className="notFound">
      <h1>404 - Sorry, that page cannot be found.</h1>
    </div>
    <div className="chill">
      <p>( We suggest finding a beach, crack open a Methos and have a chill instead! )</p>
    </div>
    </div>
  );
}
