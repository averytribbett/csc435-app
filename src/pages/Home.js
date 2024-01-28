import React, { useState } from "react";
import "./../styles/home.css";
import { ProductContainer } from "../components/Products/ProductContainer";
import { NavBar } from "../components/Nav/NavBar";

export const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="home-div">
      <NavBar
        onSearch={setSearch} // Extract search from Nav
      />
      <div className="info-div">
        <h1>Coming Soon! CSP Store Example Products Below</h1>
        <p>Avery Tribbett</p>
        <p>CSC435 - Adv Web App Dev</p>
        <p>Assignment 3</p>
        <p>01/28/2024</p>
      </div>
      
      <ProductContainer
        search={search} // Pass current search state to Container
      />
    </div>
  )
}