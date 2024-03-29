import React from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useGlobalContext } from "./Context";
function CartItem({ id, title, img, amount, price }) {
  const { remove, increase, decrease } = useGlobalContext();
  return (
    <article className="cart-item  my-8 grid grid-cols-[auto,1fr,auto] items-center gap-[1.5rem]">
      <img
        className=" w-[5rem] h-[5rem] bg-cover  mr-15"
        src={img}
        alt={title}
      />
      <div className=" flex flex-col">
        <h5 className="capitalize text-[1.5rem] font-semibold text-zinc-600">
          {title}
        </h5>
        <span className="item-price text-gray-500">${price}</span>
        <span
          className="text-[#8986fa] cursor-pointer ml-0 pl-0 text-[1rem]"
          onClick={() => remove(id)}
        >
          remove
        </span>
      </div>

      <div className=" flex flex-col items-center pr-4">
        <button
          onClick={() => increase(id)}
          className="text-[#6e67ff] text-[1.5rem]"
        >
          <FaChevronUp />
        </button>
        <span className="text-[1.2rem]">{amount}</span>
        <button
          onClick={() => decrease(id)}
          className="text-[#6e67ff] text-[1.5rem]"
        >
          <FaChevronDown />
        </button>
      </div>
    </article>
  );
}

export default CartItem;
