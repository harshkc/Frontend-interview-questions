import React, {useState} from "react";
import {useCartContext} from "../../context/cart-context";
import {Link} from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({id, title, price, image}) => {
  const {dispatch} = useCartContext();
  const [addedToCart, setAddedToCart] = useState(false);
  return (
    <article className='product-card'>
      <img src={image} alt={title} className='product-image' />

      <div className='product-info'>
        <h5>{title}</h5>
        <p>Price : ₹{(price * 70).toFixed(0)}</p>
        {!addedToCart ? (
          <button
            className='btn'
            onClick={() => {
              dispatch({type: "ADD_TO_CART", payload: {id, title, price, image}});
              setAddedToCart(true);
            }}
          >
            Add To Cart
          </button>
        ) : (
          <Link className='btn cart-btn' to='/cart'>
            Go To Cart
          </Link>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
