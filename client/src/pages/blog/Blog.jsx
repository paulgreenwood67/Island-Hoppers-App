import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./blog.css";
import Headerhop from "../../components/headerhop/Headerhop";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";


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
      <Headerhop />
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
