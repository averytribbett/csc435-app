import React, { useState, useEffect } from "react";
import jsonData from "../../data/exampleProducts.json";
import { ProductCard } from "./ProductCard";
import "../../styles/productCard.css";

export const ProductContainer = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      // @TODO once database is set up convert to fetch
      setProducts(jsonData);
      setLoading(false);
    }, 1000); // Set small delay to give loading effect.
  }, []); // Call each time page renders

  return (
    <div class="product-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        // Map through all of the products rendering each one as a product card
        products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            quantity={product.quantity}
          />
        ))
      )}
    </div>
  );
};
