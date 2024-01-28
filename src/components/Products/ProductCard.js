import React from "react";
import "../../styles/productCard.css";

export const ProductCard = ({ id, name, image, price, quantity }) => {
  return (
    <div className="product-card" id={`product-card-${id}`}>
      <div className="product-heading">
        <h3>{name}</h3>
        <h5>${price}</h5>
      </div>
      <div class="product-body"> 
        <img className="product-img" src={image} alt={`Image of ${name}`}/>
        <p className="product-quantity">Quantity - {quantity}</p>
      </div>
      <div class="product-btns">
        <input className="btn-more-details" type="button" value="More Details"/>
        <input className="btn-add-to-cart" type="button" value="Add to Cart"/>
      </div>
    </div>
  )
}