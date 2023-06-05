import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useGlobalContext } from "./Context";
function Navbar() {
  const { totalAmount } = useGlobalContext();
  return (
    <nav className="bg-[#645cff] py-[1rem]">
      <div className="nav-center  mx-auto   flex  justify-between items-center w-[90%] md:w-[60%]">
        <h4 className="text-white capitalize  text-[2rem]">useReducer</h4>
        <div className="nav-container relative flex">
          <BsFillCartPlusFill className="cart-icon  text-white text-[2rem]" />
          <div
            className="amount-container absolute top-[-0.75rem] right-[-0.75rem]
          bg-[#a29dff] text-white w-[1.72rem] h-[1.72rem] text-[1rem] grid  place-items-center  rounded-[50%]"
          >
            <span className="total-amount  ">{totalAmount}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
