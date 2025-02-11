import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { amountIncrement } from "../redux/features/cart.slice";
import { amountDecrement } from "../redux/features/cart.slice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  console.log(cart);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto min-h-[300px] pt-5">
      <div className="flex gap-5 mt-6">
        <div className="flex-1">
          {cart?.map((product) => (
            <div
              key={product.id}
              className="border-b border-gray-400 flex gap-7 pb-2"
            >
              <img src={product.thumbnail} className="w-24" alt="" />
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl">{product.title}</h3>
                <p className="text-slate-500 rounded-sm">
                  {product.description}
                </p>
                <div className="flex justify-between h-[40px]">
                  <div className="flex gap-1.5">
                    <button
                      disabled={product.amount <= 0}
                      onClick={() => dispatch(amountDecrement(product))}
                      className="size-6 bg-slate-300 cursor-pointer active:bg-slate-400 rounded-sm"
                    >
                      -
                    </button>
                    <span className="px-2">{product.amount}</span>
                    <button
                      onClick={() => dispatch(amountIncrement(product))}
                      className="size-6 bg-slate-300 cursor-pointer active:bg-slate-400 rounded-sm"
                    >
                      +
                    </button>
                  </div>
                  <div>
                  <button className='px-3 bg-fuchsia-300 rounded-sm p-2 w-[60px] h-[25px] text-white'>delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[300px] min-h-72 border-2 rounded-sm border-gray-600 p-4 text-center m-auto">
          <p className="text-2x text-slate-500">
            Total price:
            {cart?.reduce((sum, item) => sum + item.price * item.amount, 0)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
