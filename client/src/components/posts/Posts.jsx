import React from "react";
import Post from "../post/Post";
import "./posts.css";

// function to manage post 'thumbnails' being placed into home page
export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map(post => (
        <Post key={post.id} post={post}/>
      ))}
    </div>
  );
}
