import { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import axios from "axios";

//seting the states or the registration page
export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  //function to handle the submit of the registration
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(err);
    }
  };

  //registration form
  return (
    <div className="register">
      <div className="registerWrapper">
        <h3 className="registerTitle">Register</h3>
        <form className="registerForm" onSubmit={handleSubmit}>
          <label className="registerLabel">Username</label>
          <input
            type="text"
            placeholder=""
            className="registerInput"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label className="registerLabel">Email</label>
          <input
            type="email"
            placeholder=""
            className="registerInput"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="registerLabel">Password</label>
          <input
            type="password"
            placeholder=""
            className="registerInput"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="registerBtn" type="submit">
            REGISTER
          </button>
          {error && (
            <span
              style={{ color: "red", textAlign: "center", marginTop: "5px" }}
            >
              Something went wrong!
            </span>
          )}
          <Link to="/login" className="link btns">
        <button className="registerLoginBtn">Already a Hopper?</button>
      </Link>
        </form>
        </div>
     
    </div>
  );
}
