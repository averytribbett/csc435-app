import React, { useState } from "react";
import "./../styles/login.css";
import { Link } from "react-router-dom";
import { UserProfileForm } from "../components/UserProfileForm";


export const Login = () => {
  const [loginState, setLoginState] = useState(true);

  return (
    <div className="login-box">
      <h1 className="login-heading">{loginState ? "Log In" : "Create Account"}</h1>
      <form className="login-form">
        <input className="input-box" type="email" placeholder="Email" required/>
        {!loginState && // If in sign up state add UserProfileForm
          <UserProfileForm/>
        }
        <input className="input-box" type="password" placeholder="Password" required/>
        {/*Temporarily links to home page will enventually be submit button for the form*/}
        <Link className="submit-btn form-btn" to="/home">{loginState ? "Log In" : "Create Account"}</Link>
        <input className="toggle-state-btn form-btn" type="button" value={loginState ? "Or Create Account" : "Or Log In"} onClick={() => setLoginState(!loginState)}/>
      </form>
    </div>
  )
}