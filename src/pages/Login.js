import React, { useState } from "react";
import "./../styles/login.css";
import { UserProfileForm } from "../components/UserProfileForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../stores/userSlice";


export const Login = () => {
  const [loginState, setLoginState] = useState(true);
  // Form data and handlers
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    // Call login dispath function when the user logs in
    if (loginState) {
      dispatch(login({
        email: email,
        password: password,
      }));
      navigate("/home");
    } else {
      // @TODO link user to database for signup
      // NOTE after user signs up they will need to login with their account
    }
  }

  return (
    <div className="login-box">
      <h1 className="login-heading">{loginState ? "Log In" : "Create Account"}</h1>
      <form className="login-form">
        <input 
          className="input-box" 
          type="email" 
          placeholder="Email" 
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        {!loginState && // If in sign up state add UserProfileForm
          <UserProfileForm
            setUsername={setUsername}
            setFirstName={setFirstName} 
            setLastName={setLastName} 
          />
        }
        <input 
          className="input-box" 
          type="password" 
          placeholder="Password" 
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input 
          className="submit-btn form-btn" 
          value={loginState ? "Log In" : "Create Account"}
          type="button"
          onClick={handleSubmit}
        />
        <input 
          className="toggle-state-btn form-btn" 
          type="button" 
          value={loginState ? "Or Create Account" : "Or Log In"} 
          onClick={() => setLoginState(!loginState)}
        />
      </form>
    </div>
  )
}