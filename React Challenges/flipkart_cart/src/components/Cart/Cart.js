import React from "react";
import {useCartContext} from "../../context/cart-context";
import CartItem from "../CartItem/CartItem";
import OrderDetails from "../OrderDetails/OrderDetails";
import "./Cart.css";

const Cart = () => {
  const {
    state: {cart, saveItemsCart: savedItems},
  } = useCartContext();

  return (
    <div className='cart-page'>
      <div>
        <div className='cart-container'>
          <h4>My Cart ({cart.length})</h4>
          {cart.length > 0 ? (
            cart.map((cartItem) => <CartItem key={cartItem.id} {...cartItem} />)
          ) : (
            <p>No items in your cart currently</p>
          )}
        </div>
        {savedItems.length > 0 && (
          <div className='saved-item-container'>
            <hr />
            <h4>Saved Items ({savedItems.length})</h4>
            {savedItems.map((cartItem) => (
              <CartItem key={cartItem.id} {...cartItem} savedItem={true} />
            ))}
          </div>
        )}
      </div>

      <OrderDetails />
    </div>
  );
};

export default Cart;
