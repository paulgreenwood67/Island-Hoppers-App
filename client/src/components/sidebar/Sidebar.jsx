import { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

//function to manage the sidebar
export default function Sidebar() {
  const [categories, setCategories] = useState([]);
  
//useEffect to import island names from mongoDB on load
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/categories");
      setCategories(res.data);
    };
    fetchCategories();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarItem">
          
          <div >
        
       
          </div>
        </div>
        <div className="sidebarItem">
          <div className="sidebarItemTitle">ISLANDS</div>
          <ul className="sidebarCategoryList">
            {categories.map((cat) => (
              <Link
                to={`/blog?category=${cat.name}`}
                className="link sidebarCategoryListItem"
                key={cat._id}
              >
                <li>{cat.name}</li>
               
              </Link>
            ))}
          </ul>
        </div>
        <div className="sidebarItem">
          <div className="sidebarItemTitle">FOLLOW US</div>
          <div className="sidebarIcons">
            <a
              href="*"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram-square sidebarIcon"></i>
            </a>
            <a
              href="*"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-square sidebarIcon"></i>
            </a>

            <a
              href="*"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin sidebarIcon"></i>
            </a>
          </div>
{/* 
          <div>
          <Link to="/admin" className="link">
            <span className="adminLogin">Admin Login</span>
          </Link>
          </div>
*/}
        </div>
      </div>
    </div>
  );
}
