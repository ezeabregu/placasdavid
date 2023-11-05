import React from "react";
import { ProductsCard } from "./ProductsStyles";

const ProductCard = ({ img, title, size }) => {
  return (
    <ProductsCard>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>Medidas: {size}</p>
    </ProductsCard>
  );
};

export default ProductCard;
