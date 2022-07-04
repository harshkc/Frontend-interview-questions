import React from "react";
import {BsFillCartFill} from "react-icons/bs";
import {Link} from "react-router-dom";
import {useCartContext} from "../../context/cart-context";
import "./Navbar.css";

const Navbar = () => {
  const {
    state: {cart},
  } = useCartContext();
  return (
    <nav>
      <div className='section-center nav-center'>
        <Link to='/'>
          <h4>Flipkart</h4>
        </Link>
        <div style={{width: "5rem"}}></div>
        <Link to='/cart' className='cart-icon'>
          <div>
            <BsFillCartFill />
            <span style={{position: "relative", top: "-1px", right: "2.5px"}}>{cart.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
