import React from "react";

const ProductCard = ({product}) => {
  return (
    <div key={product.id} className='w-64 p-5 ml-6'>
      <div className='relative pt-64 overflow-hidden'>
        <img src={product.image} alt='' className='absolute inset-0 w-full h-auto' />
      </div>
      <span className='block text-sm font-medium'>
        {product.brand.charAt(0).toUpperCase() + product.brand.slice(1)}
      </span>
      <h4 className='h-12 overflow-hidden w-44 overflow-ellipsis'>{product.title}</h4>
      <span className='block mb-2 text-lg font-bold'>₹{product.price}</span>
    </div>
  );
};

export default ProductCard;
