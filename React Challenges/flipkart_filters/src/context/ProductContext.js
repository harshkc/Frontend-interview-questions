import React, {useReducer, createContext, useContext} from "react";
import {products} from "../utils/mockData";

const ProductContext = createContext();
ProductContext.displayName = "ProductContext";

const initialProducts = products;

const productsReducer = (state, action) => {
  let filteredProducts = [];
  switch (action.type) {
    case "FILTER_PRODUCTS":
      //filter by category first
      filteredProducts = initialProducts;
      if (action.payload.category.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          action.payload.category.includes(product.category)
        );
      }
      //filter by brand
      if (action.payload.brands.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          action.payload.brands.includes(product.brand)
        );
      }
      //filter by size
      if (action.payload.sizes.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          action.payload.sizes.every((size) => product.sizes.includes(size))
        );
      }
      return filteredProducts;
    case "FILTER_PRICE_LOW":
      filteredProducts = [...state].sort((a, b) => a.price - b.price);
      return filteredProducts;
    case "FILTER_PRICE_HIGH":
      filteredProducts = [...state].sort((a, b) => b.price - a.price);
      return filteredProducts;
    case "FILTER_RESET":
      return initialProducts;
    case "SEARCH_PRODUCTS":
      if (!(action.payload && action.payload.length > 0)) return initialProducts;
      filteredProducts = [...initialProducts].filter(
        (product) =>
          product.title.toLowerCase().includes(action.payload.toLowerCase()) ||
          product.description.toLowerCase().includes(action.payload.toLowerCase()) ||
          product.brand.toLowerCase().includes(action.payload.toLowerCase())
      );
      return filteredProducts;
    default:
      return state;
  }
};

const ProductProvider = ({children}) => {
  const [products, dispatch] = useReducer(productsReducer, initialProducts);
  return <ProductContext.Provider value={{products, dispatch}}>{children}</ProductContext.Provider>;
};

const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

export {ProductProvider, useProductContext};
