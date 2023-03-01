import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./singlePost.css";

import { Link } from "react-router-dom";
import { Context } from "../../context/Context";


// function to handle the display of a full post
export default function SinglePost() {
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const [singlePost, setSinglePost] = useState({});
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const fetchSinglePost = async () => {
      const res = await axios.get("/posts/" + postId);
      setSinglePost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    fetchSinglePost();
  }, [postId]);

 const PF = '../images/'

  // function to handle the deletion of a post
  
  
 
  const handleDelete = async () => {
    try {
      await axios.delete("/posts/" + postId);
      window.location.replace("/");
    } catch (err) {
      console.error(err);
    }
  };
  

 // function to handle updating a post

 const handleUpdate = async () => {
  try {
    const updatedPostData = {
      title,
      desc,
    };
    const updatedPost = {
      ...singlePost,
      ...updatedPostData,
    };
    if (user?.username === singlePost.username ) { //updateMode?
      updatedPost.isAdmin = false;
    }
    if (user.isAdmin) {
      updatedPost.isAdmin = true;
    }
    await axios.put(`/posts/${postId}`, updatedPost);
    setUpdateMode(false);
  } catch (err) {
    console.error(err);
  }
};
/*

 const handleUpdate = async () => {
  try {
    await axios.put("/posts/" + postId, {
      username: user.username,
      title,
      desc,
    });
    
    setUpdateMode(false);
  } catch (err) {}
};
*/

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {singlePost.photo && (
          <img src={PF + singlePost.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            placeholder={singlePost.title}
            value={title}
            className="singlePostUpdateTitleInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <div className="singlePostTitleInfo">
            <h4 className="singlePostTitle">{title}</h4>
         
          </div>
        )}
        <div className="singlePostAuthorInfo">
          <span className="singlePostAuthorName">
            Author:
            <Link className="link" to={`/?username=${singlePost.username}`}>
              <b> {singlePost.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(singlePost.createdAt).toDateString()}
          </span>

          {(user && (user.username === singlePost.username || user.isAdmin)) && (
  <>
    <i className="far fa-edit edit" onClick={() => setUpdateMode(true)}></i>
    <i className="far fa-trash-alt trash" onClick={handleDelete}></i>
  </>
)}
        </div>
        {updateMode ? (
          <textarea
            className="singlePostUpdateDescInput"
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDescription">{desc}</p>
        )}
        {updateMode && (
          <div className="singlePostBtnWrapper">
            <button className="singlePostBtn" onClick={handleUpdate}>
              Update
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
