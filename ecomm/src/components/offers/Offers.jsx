import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="flex ml-[150px] mt-[150px] w-[65%] h-[80vh]  py-0 px-[140px] mb-[150px] bg-gradient-to-r from-violet-400 to-white">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-4xl color-[#171717] font-bold">Exclusive</h1>
        <h1 className="text-4xl color-[#171717] font-bold">Offers for you</h1>
        <p className="text-lg color-[#171717] font-bold">
          ONLY ON BEST SELLERS PRODUCT
        </p>
        <button className="rounded-lg border text-white mt-[30px] text-lg cursor-pointer h-[39px] w-[190px] font-semibold border-red-400 bg-[#ff4141]">
          Check Now
          </button>
      </div>
      <div className="flex flex-1 items-center justify-end  pt-[50px]">
        <img className="pr-[30px] mr-[-300px]" src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
