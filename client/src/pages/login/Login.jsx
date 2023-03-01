import { useContext } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";


//function to handle the submit of the sign in form
export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
// form for the sign in
  return (
    <div className="login">
      <div className="loginWrapper">
        <h3 className="loginTitle">Hop-in</h3>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label className="loginLabel">Username</label>
          <input
            type="text"
            placeholder=""
            className="loginInput"
            required
            ref={userRef}
          />
          <label className="loginLabel">Password</label>
          <input
            type="password"
            placeholder=""
            className="loginInput"
            required
            ref={passwordRef}
          />
          <button className="loginBtn" type="submit" disabled={isFetching}>
            HOP-IN
          </button>
          <Link to="/register" className="link btns">
        <button className="loginRegisterBtn">Become a Hopper</button>
      </Link>
        </form>
      
      </div>
     
    </div>
  );
}
