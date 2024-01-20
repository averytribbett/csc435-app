import React from "react";
import "./../styles/login.css";

// Required Inputs for when user is creating account
export const UserProfileForm = () => {
  return (
    <>
      <input class="input-box" type="text" placeholder="Username" required/>
      <input class="input-box" type="text" placeholder="First Name" required/>
      <input class="input-box" type="text" placeholder="Last Name" required/>
    </>
  )
}