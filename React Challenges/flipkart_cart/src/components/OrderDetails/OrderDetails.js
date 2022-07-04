import React from "react";
import {useCartContext} from "../../context/cart-context";

const OrderDetails = () => {
  const {
    state: {cart},
  } = useCartContext();
  console.log(cart);
  const totalPrice = cart.reduce((totalPrice, currentItem) => {
    return (totalPrice += (currentItem?.qty ?? 1) * currentItem.price);
  }, 0);

  const totalAmount = totalPrice;
  return (
    <div>
      <h4>Order Details</h4>
      <div className='order-info'>
        <h5>Price : ₹{(totalPrice * 75).toFixed(2)}</h5>
        <h5>Delivery : Free</h5>
        <h5>Total Amount :₹{(totalAmount * 75).toFixed(2)}</h5>
      </div>
    </div>
  );
};

export default OrderDetails;
