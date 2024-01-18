import React from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="flex mx-[170px] my-[0px]">

      <div className="flex gap-[17px]">
        <div className="flex flex-col gap-[16px]">
          <img className="h-[115px]" src={product.image} alt="" />
          <img className="h-[115px]" src={product.image} alt="" />
          <img className="h-[115px]" src={product.image} alt="" />
          <img className="h-[115px]" src={product.image} alt="" />
        </div>

        <div>
          <img className="w-[600px] h-[510px]" src={product.image} alt="" />
        </div>

      </div>

      <div className="my-[0px] mx-[40px] flex flex-col">
        <h1 className="text-[#3d3d3d] text-3xl my-2 py-3 font-bold">
          {product.name}
        </h1>

        <div className="flex w-[95px] gap-[3px] text-[#1c1c1c] text-sm h-[16px] mt-3 mb-1">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p className="mb-3">122</p>
        </div>

        <div className="flex gap-[30px] text-lg font-bold mt-5 mb-7">
          <div className="text-[#818181] line-through">
            ${product.old_price}
          </div>
          <div className="text-[#ff4141]">${product.new_price}</div>
        </div>

        <div className="">
          A lightwight, usually knitted, pullover shirt, close fitting and with
          a round neckline and short sleeves.
        </div>

        <div>
          <h1 className="my-7 text-[#656565] text-lg font-semibold">
            Select Size
          </h1>

          <div className="flex gap-[18px] my-[2px]">

            <div className="border bg-[#fbfbfb] cursor-pointer rounded-sm p-2 px-4">
              S
            </div>
            <div className="border bg-[#fbfbfb] cursor-pointer rounded-sm p-2 px-4">
              M
            </div>
            <div className="border bg-[#fbfbfb] cursor-pointer rounded-sm p-2 px-4">
              L
            </div>
            <div className="border bg-[#fbfbfb] cursor-pointer rounded-sm p-2 px-4">
              {" "}
              XL
            </div>
            <div className="border bg-[#fbfbfb] cursor-pointer rounded-sm p-2 px-4">
              XXL
            </div>

          </div>

        </div>

        <button onClick={()=>{addToCart(product.id)}} className="border rounded-sm w-[170px] my-5 font-semibold text-white bg-[#ff4141] h-[45px]">
          ADD TO CART
        </button>
        <p className="mt-3">
          <span className="font-semibold">Category:</span>Women, T-shirt, Crop
          Top
        </p>
        <p className="mt-3">
          <span className="font-semibold">Tags:</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
