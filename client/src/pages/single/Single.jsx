import React from "react";
import SinglePost from "../../components/singlePost/SinglePost";
import Sidebar from "../../components/sidebar/Sidebar";
import "./single.css";

// function placing the edit or delete post functionality into the single page
// also adds the side bar to the single page
export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}
