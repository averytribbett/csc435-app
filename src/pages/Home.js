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
        <h1>Coming Soon! CSP Store Example Products Below Click Add To Cart!</h1>
        <p>Avery Tribbett</p>
        <p>CSC435 - Adv Web App Dev</p>
        <p>Assignment 4</p>
        <p>02/04/2024</p>
        <p>Icons by <a target="_blank" href="https://icons8.com">Icons8</a></p>
      </div>
      <ProductContainer
        search={search} // Pass current search state to Container
      />
    </div>
  )
}