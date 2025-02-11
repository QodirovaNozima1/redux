import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../redux/features/wishlist.slice";
import { FiShoppingCart } from "react-icons/fi";
import { addtoCart } from "../redux/features/cart.slice";
import { CiClock2 } from "react-icons/ci";
import { GiProgression } from "react-icons/gi";
import { IoCartSharp, IoCartOutline } from "react-icons/io5";

const Products = ({ data }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);
  return (
    <div className="grid container mx-auto lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-10">
      {data?.map((product) => (
        <div className="w-[180px]" key={product.id}>
          <div className="relative h-[250px] group overflow-hidden">
            <img
              src={product.thumbnail}
              className="w-full object-contain"
              alt=""
            />
            <button
              onClick={() => dispatch(toggleWishlist(product))}
              className="duration-200  group-hover:right-2 absolute top-2 right-2 md:right-[-30px] text-xl cursor-pointer p-2 rounded-full"
            >
              {wishlist?.some((item) => item.id === product.id) ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart />
              )}
            </button>
            <button
              onClick={() => dispatch(addtoCart(product))}
              className="duration-200 delay-75  group-hover:right-2 absolute top-11 right-2 md:right-[-30px] text-2xl cursor-pointer p-2 rounded-full "
            >
               {cart?.some((item) => item.id === product.id) ? (
                <IoCartSharp className="text-black" />
              ) : (
                <IoCartOutline />
              )}
            </button>
          </div>
          <div>
            <div className="text-center flex flex-col items-center gap-3">
              <h3
                title={product.title}
                className="text-xl font-medium line-clamp-1"
              >
                {product.title}
              </h3>
              <p className="text-[#737373] text-[14px] font-bold mb-2">
                English Department
              </p>
              <div className="flex gap-2">
                <p className="text-[#BDBDBD] font-bold">
                  ${product.rating.rate}
                </p>
                <strong className="block text-[#23856D] text-[16px] font-bold mb-3">
                  ${product.price}
                </strong>
              </div>
              <div className="flex items-center w-full justify-between">
                <div className="flex items-center">
                  <p className="text-[#23856D]">
                    <GiProgression />
                  </p>
                  <p className="text-[#737373]">10 comments</p>
                </div>
                <div>
                <button className="bg-fuchsia-300 rounded-sm text-white h-[30px] w-[40px]">Buy now</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
