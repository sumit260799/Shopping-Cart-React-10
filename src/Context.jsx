import React, { createContext, useContext, useEffect, useReducer } from "react";
import cartItems from "./data";
import reducer from "./reducer";

const url = "https://www.course-api.com/react-useReducer-cart-project";

import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";
const AppContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(),
};

const getTotals = (cart) => {
  let totalAmount = 0;
  let totalCost = 0;

  for (let { amount, price } of cart.values()) {
    totalAmount += amount;
    totalCost += amount * price;
  }
  return { totalAmount, totalCost };
};

export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalAmount, totalCost } = getTotals(state.cart);
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };
  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };
  async function fetchData() {
    dispatch({ type: LOADING });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: DISPLAY_ITEMS, payload: { data } });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
