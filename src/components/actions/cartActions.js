import { ADD_TO_CART, REMOVE_PRODUCT } from "./action-types/cart-actions";

export const addToCart = productName => {
  return {
    type: ADD_TO_CART,
    productName
  };
};

export const removeItem = productName => {
  return {
    type: REMOVE_PRODUCT,
    productName
  };
};
