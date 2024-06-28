import React, { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import cart from "../photos/Cart.png";
import { ProductArray } from "../App";
export default function Header() {
  const [selectedProduct,setSelectedProduct] = useContext(ProductArray);

// let length=selectedProduct.length;
  return (
    <div className="bg-gray-900 text-white flex items-center h-[75px] relative">
      <div className="font-mono ml-12 text-2xl font-extralight">Freshkart</div>
      <div className="w-[400px] flex justify-evenly uppercase font-bold tracking-wide">
        <div className="cursor-pointer pb-2 mt-2.5 border-b-1 border-b-solid border-b-transparent hover:border-b-2 hover:border-b-solid hover:border-b-yellow">
          Fruits
        </div>
        <div className="cursor-pointer pb-2 mt-2.5 border-b-1 border-b-solid border-b-transparent hover:border-b-2 hover:border-b-solid hover:border-b-yellow">
          Vegetables
        </div>
      </div>
      <div className="w-16 justify-between flex absolute right-36 cursor-pointer">
        <img src={cart} className="w-8" alt="" />
        {/* {selectedProduct.length > 0 ?selectedProduct.length : 0} */}
        {selectedProduct.cart> 0 ? (
          <div
            className=" absolute -top-4 left-4 w-5 h-5 rounded-lg bg-red-700 text-white text-lg ;"
          >
            {selectedProduct.cart}
          </div>
        ) : null}
        {/* <div className="">Cart</div> */}
      </div>
      <div className="absolute right-12 cursor-pointer">Login</div>
    </div>
  );
}
