import React from "react";
import { ProductsWrapper, ProductsContainter } from "./ProductsStyles";
import { products } from "../data/Productos";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <ProductsWrapper>
      <h2>Nuestros Productos</h2>
      <ProductsContainter>
        {products.map((product) => {
          return <ProductCard {...product} key={product.id} />;
        })}
      </ProductsContainter>
    </ProductsWrapper>
  );
};

export default Products;
