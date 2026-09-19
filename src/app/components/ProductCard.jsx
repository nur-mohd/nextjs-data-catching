'use client'
import React from "react";
import useUser from "../hooks/useUser";

const ProductCard = ({ product }) => {

    const { name, price, description } = product;

    const user = useUser();
    console.log("user from context product card", user);

    return (
    
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{price}</p>
        <p>
          {description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary rounded-2xl">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
