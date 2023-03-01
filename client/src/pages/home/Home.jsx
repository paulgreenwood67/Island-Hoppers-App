import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";



//function for the home page 
// with the useEffect function to load the island names from mongoDB on start up 
//along with the header component for the main image and the side bar component
export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        {posts.length ? (
          <Posts posts={posts} />
        ) : (
          <p className="sorryMessage">
            Sorry, we don't currently have any posts for that island
          </p>
        )}
        <Sidebar />
      </div>
    </>
  );
}
