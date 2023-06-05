import React from "react";
import cartItems from "./data";
import CartItem from "./CartItem";
import { useGlobalContext } from "./Context";

function CartContainer() {
  const { cart, clearCart, totalCost } = useGlobalContext();
  const cartItems = Array.from(cart.entries());
  if (cartItems.length === 0) {
    return (
      <section className="w-[80%] mx-auto">
        <header className="my-12 text-center">
          <h2 className="uppercase tracking-wide text-[2rem]">your bag</h2>
          <h4 className="text-[1.4rem] text-zinc-500 my-5">
            is currently empty 🥲
          </h4>
        </header>
      </section>
    );
  }
  return (
    <section className="w-[90%] md:w-[60%] mx-auto">
      <header>
        <h2 className="text-center text-[3rem] my-6 uppercase">your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          const [id, cartItem] = item;
          return <CartItem key={id} {...cartItem} />;
        })}
      </div>
      <footer className="my-3">
        <hr />
        <div className="my-3">
          <h5 className="text-[1.5rem] capitalize">
            total{" "}
            <span className="float-right bg-[#645cff] text-white rounded-[5px] px-2 ">
              ${totalCost.toFixed(2)}
            </span>
          </h5>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="bg-[#f25f5f] rounded-[5px] px-3 capitalize text-[1.2rem]  my-3 text-white"
            onClick={clearCart}
          >
            clear cart
          </button>
        </div>
      </footer>
    </section>
  );
}

export default CartContainer;
