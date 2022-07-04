import React from "react";
import {useProductContext} from "../context/ProductContext";

const sizes = ["s", "m", "l", "xl"];
const brands = ["nike", "zara", "wildstore"];
const idealFor = ["men", "women"];

const Sidebar = () => {
  const {dispatch} = useProductContext();
  const [sortOrder, setSortOrder] = React.useState(null);
  const [gender, setGender] = React.useState([]);
  const [brandFilter, setBrandFilter] = React.useState([]);
  const [sizeFilter, setSizeFilter] = React.useState([]);

  return (
    <aside className='my-4 mr-4 w-72'>
      <div className='px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800'>
        <h3 className='text-xl font-semibold'>Filters</h3>
        <div className='my-4'>
          <p className='my-2 text-lg'>Ideal For:</p>
          <div className='flex flex-row'>
            {idealFor.map((elem) => (
              <form key={elem}>
                <input
                  type='checkbox'
                  id={elem}
                  name={elem}
                  value={elem}
                  checked={gender.includes(elem)}
                  onChange={() => {
                    let tempGender = [...gender];
                    console.log(tempGender, 1);
                    if (tempGender.includes(elem)) {
                      tempGender = tempGender.filter((gen) => gen !== elem);
                    } else {
                      tempGender = [...tempGender, elem];
                    }
                    setGender(tempGender);
                    dispatch({
                      type: "FILTER_PRODUCTS",
                      payload: {category: tempGender, sizes: sizeFilter, brands: brandFilter},
                    });
                  }}
                />
                <label className='pr-2' htmlFor={elem}>
                  {elem.charAt(0).toUpperCase() + elem.slice(1)}
                </label>
              </form>
            ))}
          </div>
        </div>
        <div className='my-4'>
          <p className='my-2 text-lg'>Brand:</p>
          <div className='flex flex-row'>
            {brands.map((elem) => (
              <form key={elem}>
                <input
                  type='checkbox'
                  id={elem}
                  name={elem}
                  value={elem}
                  checked={brandFilter.includes(elem)}
                  onChange={() => {
                    let tempBrands = [...brandFilter];
                    if (tempBrands.includes(elem)) {
                      tempBrands = tempBrands.filter((brand) => brand !== elem);
                    } else {
                      tempBrands = [...tempBrands, elem];
                    }
                    setBrandFilter(tempBrands);
                    dispatch({
                      type: "FILTER_PRODUCTS",
                      payload: {category: gender, sizes: sizeFilter, brands: tempBrands},
                    });
                  }}
                />
                <label className='pr-2' htmlFor={elem}>
                  {elem.charAt(0).toUpperCase() + elem.slice(1)}
                </label>
              </form>
            ))}
          </div>
        </div>
        <div className='my-4'>
          <p className='my-2 text-lg'>Sizes:</p>
          <div className='flex flex-row'>
            {sizes.map((elem) => (
              <form key={elem}>
                <input
                  type='checkbox'
                  id={elem}
                  name={elem}
                  value={elem}
                  checked={sizeFilter.includes(elem)}
                  onChange={() => {
                    let tempSizes = [...sizeFilter];
                    if (tempSizes.includes(elem)) {
                      tempSizes = tempSizes.filter((size) => size !== elem);
                    } else {
                      tempSizes = [...tempSizes, elem];
                    }
                    setSizeFilter(tempSizes);
                    dispatch({
                      type: "FILTER_PRODUCTS",
                      payload: {category: gender, sizes: tempSizes, brands: brandFilter},
                    });
                  }}
                />
                <label className='pr-2' htmlFor={elem}>
                  {elem.charAt(0).toUpperCase() + elem.slice(1)}
                </label>
              </form>
            ))}
          </div>
          <h3 className='my-4 text-xl font-semibold'>Sort By:</h3>
          <div className='my-4'>
            <form className='flex flex-row'>
              <input
                type='radio'
                id='price1'
                name='price1'
                checked={sortOrder === "Price: Low to High"}
                onChange={(e) => {
                  setSortOrder(e.target.value);
                  dispatch({type: "FILTER_PRICE_LOW"});
                }}
                value='Price: Low to High'
              />
              <label htmlFor='Price: Low to High'> Price: Low to High</label>
              <br />
              <input
                type='radio'
                id='price2'
                name='price2'
                value='Price: High to Low'
                checked={sortOrder === "Price: High to Low"}
                onChange={(e) => {
                  setSortOrder(e.target.value);
                  dispatch({type: "FILTER_PRICE_HIGH"});
                }}
              />
              <label htmlFor='Price: High to Low'> Price: High to Low</label>
            </form>
          </div>
          <button
            onClick={() => {
              setGender([]);
              setBrandFilter([]);
              setSizeFilter([]);
              setSortOrder(null);
              dispatch({type: "FILTER_RESET"});
            }}
            className='px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700'
          >
            Clear Filters
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
