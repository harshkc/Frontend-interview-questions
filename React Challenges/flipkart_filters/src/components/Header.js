import React from "react";
import {FaShoppingCart} from "react-icons/fa";
import {useProductContext} from "../context/ProductContext";

function Header() {
  const {dispatch} = useProductContext();
  const timeout = React.useRef();

  const handleSearch = (e) => {
    clearTimeout(timeout.current);
    const value = e.target.value;
    timeout.current = setTimeout(() => {
      dispatch({type: "SEARCH_PRODUCTS", payload: value});
    }, 500);
  };

  return (
    <div>
      <div className='sticky top-0 z-50 flex items-center px-10 bg-blue-600 h-14 justify-evenly py-7'>
        <div className='flex '>
          <div className='flex flex-col items-center'>
            <img
              className='object-contain h-5 cursor-pointer '
              src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png'
              alt=''
            />
            <p className='text-xs italic text-white cursor-pointer hover:underline'>
              Explore <span className='font-bold text-yellow-300'>Plus</span>
            </p>
          </div>
          <input
            className='px-3 ml-4 text-sm rounded-sm outline-none w-36 md:w-96'
            type='search'
            placeholder='Search for products, brands and more'
            onChange={handleSearch}
          />
        </div>
        <div className='flex items-center space-x-3 md:space-x-8 '>
          <button className='px-3 py-1 text-blue-500 bg-white rounded-sm md:px-7 text-md'>Login</button>
          <h4 className='hidden text-white cursor-pointer md:inline'>More</h4>
          <div className='flex items-center cursor-pointer'>
            <FaShoppingCart className='h-6 text-white ' />
            <p className='ml-1 text-white '>Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
