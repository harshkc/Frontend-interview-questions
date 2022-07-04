import React from "react";
import {mockProducts} from "../../mockData/mockProducts";
import ProductCard from "../ProductCard/ProductCard";

import "./ProductsList.css";

const ProductsList = () => {
  return (
    <div className='products-list'>
      {mockProducts.length > 0 ? (
        mockProducts.map((product) => <ProductCard key={product.id} {...product} />)
      ) : (
        <p>Sorry No Product exists</p>
      )}
    </div>
  );
};

export default ProductsList;
