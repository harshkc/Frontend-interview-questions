import React from "react";
import "./CartItem.css";
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai";
import {useCartContext} from "../../context/cart-context";
const CartItem = ({id, title, price, image, qty, savedItem}) => {
  const {dispatch} = useCartContext();
  return (
    <article className='cart-item'>
      <div className='cart-item-details'>
        <img src={image} alt={title} />
        <div className='info'>
          <h5>{title}</h5>
          <p>Price : ₹ {(price * 75).toFixed(2)}</p>
        </div>
      </div>
      <div className='cart-actions'>
        <div className='increment-decrement'>
          {!savedItem && (
            <>
              <AiOutlineMinus
                onClick={() => dispatch({type: "DECREMENT_ITEM", payload: id})}
                className='increment-decrement-icon'
              />
              {qty ?? 1}
              <AiOutlinePlus
                onClick={() => dispatch({type: "INCREMENT_ITEM", payload: id})}
                className='increment-decrement-icon'
              />
            </>
          )}
        </div>
        <div className='cart-btns'>
          {!savedItem ? (
            <>
              <button
                className='btn'
                onClick={() => dispatch({type: "SAVE_FOR_LATER", payload: {id, title, price, image}})}
              >
                Save For Later
              </button>
              <button
                className='btn btn-delete'
                onClick={() => dispatch({type: "REMOVE_FROM_CART", payload: id})}
              >
                Remove
              </button>
            </>
          ) : (
            <>
              <button
                className='btn'
                onClick={() => dispatch({type: "MOVE_TO_CART", payload: {id, title, price, image}})}
              >
                Move to Cart
              </button>
              <button
                className='btn btn-delete'
                onClick={() => dispatch({type: "REMOVE_FROM_SAVED", payload: id})}
              >
                Remove
              </button>
            </>
          )}
        </div>
      </div>
    </article>
  );
};

export default CartItem;
