import React from "react";
import "./../styles/login.css";

// Required Inputs for when user is creating account
export const UserProfileForm = ({
  setUsername,
  setFirstName,
  setLastName,
}) => {
  return (
    <>
      <input 
        className="input-box" 
        type="text" 
        placeholder="Username" 
        required
        onChange={(e) => setUsername(e)}
      />
      <input 
        className="input-box" 
        type="text" 
        placeholder="First Name" 
        required
        onChange={(e) => setFirstName(e)}
      />
      <input 
        className="input-box" 
        type="text" 
        placeholder="Last Name" 
        required
        onChange={(e) => setLastName(e)}
      />
    </>
  )
}