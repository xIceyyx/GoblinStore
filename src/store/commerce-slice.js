// Redux
import { createSlice } from "@reduxjs/toolkit";
//

// Commerce
import { commerce } from "../lib/commerce";
//

const initialState = { cart: {}, products: [] };

const commerceSlice = createSlice({
  name: "commerce",
  initialState,
  reducers: {
    setCart(state, action) {
      state.cart = action.payload;
    },
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const getCart = (data) => {
  return async (dispatch) => {
    const cart = await commerce.cart.retrieve();
    dispatch(commerceSlice.actions.setCart(cart));
  };
};

export const getProducts = (data) => {
  return async (dispatch) => {
    const { data } = await commerce.products.list();
    dispatch(commerceSlice.actions.setProducts(data));
  };
};

export const addToCart = (data) => {
  return async (dispatch) => {
    const { productId, quantity, variants } = data;
    const item = await commerce.cart.add(productId, quantity, variants);
    dispatch(commerceSlice.actions.setCart(item.cart));
  };
};

export const handleCartQuantity = (data) => {
  return async (dispatch) => {
    const { productId, quantity } = data;
    const response = await commerce.cart.update(productId, { quantity });

    dispatch(commerceSlice.actions.setCart(response.cart));
  };
};

export const removeFromCart = (data) => {
  return async (dispatch) => {
    const { productId } = data;
    const item = await commerce.cart.remove(productId);
    dispatch(commerceSlice.actions.setCart(item.cart));
  };
};

export const commerceActions = commerceSlice.actions;

export default commerceSlice;
