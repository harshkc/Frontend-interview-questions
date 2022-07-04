import React from "react";
import ProductCard from "./ProductCard";
import {useProductContext} from "../context/ProductContext";

const ProductList = () => {
  const {products} = useProductContext();
  return (
    <div className='flex flex-row flex-wrap w-full py-4 ml-6'>
      {products.length > 0 ? (
        products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })
      ) : (
        <p className='flex items-center justify-center min-w-full'>No products found</p>
      )}
    </div>
  );
};

export default ProductList;
