import React from "react";
import { ProductsWrapper, ProductsContainter } from "./ProductsStyles";
import { products, cieloraso } from "../data/Productos";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <ProductsWrapper id="products">
      <h2>Nuestros Productos</h2>
      <h3>Placas</h3>
      <ProductsContainter>
        {products.map((product) => {
          return <ProductCard {...product} key={product.id} />;
        })}
      </ProductsContainter>
      <h3>Cieloraso</h3>
      <ProductsContainter>
        {cieloraso.map((product) => {
          return <ProductCard {...product} key={product.id} />;
        })}
      </ProductsContainter>
    </ProductsWrapper>
  );
};

export default Products;
