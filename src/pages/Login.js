import React, { useState } from "react";
import "./../styles/login.css";
import { Link } from "react-router-dom";
import { UserProfileForm } from "../components/UserProfileForm";


export const Login = () => {
  const [loginState, setLoginState] = useState(true);

  return (
    <div class="login-box">
      <h1 class="login-heading">{loginState ? "Log In" : "Create Account"}</h1>
      <form class="login-form">
        <input class="input-box" type="email" placeholder="Email" required/>
        {!loginState && // If in sign up state add UserProfileForm
          <UserProfileForm/>
        }
        <input class="input-box" type="password" placeholder="Password" required/>
        <input class="submit-btn" type="submit" value={loginState ? "Log In" : "Create Account"}/>
        <input class="toggle-state-btn" type="button" value={loginState ? "Or Create Account" : "Or Log In"} onClick={() => setLoginState(!loginState)}/>
      </form>
    </div>
  )
}