import React from "react";
import "./../styles/home.css";
import { ProductContainer } from "../components/Products/ProductContainer";

export const Home = () => {
  return (
    <div className="home-div">
      <div className="info-div">
        <h1>Coming Soon! CSP Store Example Products Below</h1>
        <p>Avery Tribbett</p>
        <p>CSC435 - Adv Web App Dev</p>
        <p>Assignment 3</p>
        <p>01/28/2024</p>
      </div>
      
      <ProductContainer/>
    </div>
  )
}