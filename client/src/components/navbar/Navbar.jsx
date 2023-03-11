import { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

// function to create the nav bar
export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  //function to handle logging out
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
 return (
    <div className="navbar">
      <div className="navbarWrapper">
        <Link  to="/"  className="navbarLeft">
          <h1><span className="island hide1"><span className="material-symbols-outlined">sunny</span>iSLAND</span><span className="hoppers hide1">HOPPERS</span></h1>
        <div>
        <h1 className="logo">iH</h1>
        </div>
        
        </Link>


        <div className="navHide1 navbarCenter" > 
        <div className="navbarCenter">
          <Link to="/" className="link">
            <span className="navbarCenterItem">HOME</span>
          </Link>
          <Link to="/blog" className="link">
            <span className="navbarCenterItem">HOPS</span>
          </Link>
         
          <Link to="/write" className="link">
            <span className="navbarCenterItem">WRITE</span>
          </Link>
          <span className="navbarCenterItemLogOut" onClick={handleLogout}>
            {user && "LOGOUT"}
          </span>
        </div>
        </div>


<div className="navHide2" >
        <div className="navbarCenter">
          <Link to="/" className="link">
            <span className="navbarCenterItem">HOME</span>
          </Link>
          <Link to="/about" className="link">
            <span className="navbarCenterItem">ABOUT</span>
          </Link>
          <Link to="/write" className="link">
            <span className="navbarCenterItem">CREATE</span>
          </Link>
          <span className="navbarCenterItemLogOut" onClick={handleLogout}>
            {user && "LOGOUT"}
          </span>
        </div>
        </div>

        <div className="navbarRight">
          {user && (
             <img
                src={
                  (user.profilePicture !== "")
                    ? PF + user.profilePicture
                    : `../../no-avatar.jfif`
                }
                alt=""
                className="navbarImg"
              />
          )}
        </div>
      </div>
    </div>
  );
}
