import React from "react";
import { useNavigate } from "react-router-dom";

export const CategoryCard = ({ product }) => {
  const nevigate = useNavigate();
  return (
    <div
      onClick={() => nevigate("catagary")}
      className="text-center" 
    >
      <img
        className="img-fluid img-thumbnail" 
        src={product.image}
        alt="reer"
        width={130}
      />
      <p className="fw-semibold pt-1">{product.name}</p>
    </div>
  );
};
