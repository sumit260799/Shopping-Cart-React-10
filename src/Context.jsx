import React, { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

function Context({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  return (
    <AppContext.Provider values={{ clearCart, remove, increase, decrease }}>
      {children}
    </AppContext.Provider>
  );
}

export default Context;

export const useGlobalContext = () => {
  return useContext(AppContext);
};
