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
        <div className="navbarLeft">
          <h1><span className="island"><span className="material-symbols-outlined">sunny</span>ISLAND</span><span className="hoppers">HOPPERS</span></h1>
        </div>
        <div className="navbarCenter ">
          <Link to="/" className="link">
            <span className="navbarCenterItem">HOME</span>
          </Link>
          <Link to="/about" className="link">
            <span className="navbarCenterItem">ABOUT</span>
          </Link>
          <Link to="/write" className="link">
            <span className="navbarCenterItem">CREATE A HOP</span>
          </Link>
          <span className="navbarCenterItemLogOut" onClick={handleLogout}>
            {user && "LOGOUT"}
          </span>
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
