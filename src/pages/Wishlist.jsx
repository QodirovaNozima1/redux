import React from "react";
import { useSelector } from "react-redux";
import Products from "../components/Products";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.value);
  console.log(wishlist);

  return (
    <div className="container min-h-[400px]">
      <div className="mb-12 text-[black] text-start border-b">
        <h2 className="mb-2.5 text-[28px] font-normal">Your wishlist</h2>
      </div>
      <br />
      <Products data={wishlist} />
    </div>
  );
};

export default Wishlist;
