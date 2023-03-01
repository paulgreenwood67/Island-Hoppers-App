import React from "react";
import "./post.css";

import { Link } from "react-router-dom";

// function to manage the creation of a post 'thumbnail' for the home page
export default function Post({ post }) {
  const PF = './images/'
  return (
    <div className="post">
      <Link to={`/post/${post._id}`} className="link">
        <div className="postWrapper">
          {post.photo && <img src={PF+post.photo} alt="" className="postImg" />}
          <div className="postInfo">
            <div className="postCategory">
              {post.category}
            </div>
            <h4 className="postTitle">{post.title}</h4>
            <div className="creation">
              <span className="postDate">
                {new Date(post.createdAt).toDateString()}
              </span>
            </div>
          </div>
          <p className="postDescription">{post.desc}</p>
        </div>
      </Link>
    </div>
  );
}
