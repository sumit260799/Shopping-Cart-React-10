import React from "react";
import cartItems from "./data";
import CartItem from "./CartItem";

function CartContainer() {
  return (
    <section className="w-[82%] md:w-[60%] mx-auto">
      <header>
        <h2 className="text-center text-[3rem] my-6 uppercase">your bag</h2>
      </header>
      <div>
        {cartItems.map((cartItem) => {
          //   const { id, item } = cartItem;
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
      <footer className="my-3">
        <hr />
        <div className="my-3">
          <h5 className="text-[1.5rem] capitalize">
            total{" "}
            <span className="float-right bg-[#645cff] text-white rounded-[5px] px-2 ">
              $1222.00
            </span>
          </h5>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-[#f25f5f] rounded-[5px] px-3 capitalize text-[1.2rem]  my-3 text-white">
            clear cart
          </button>
        </div>
      </footer>
    </section>
  );
}

export default CartContainer;
