import React from "react";

const NewsLEtter = () => {
  return (
    <div className="flex ml-[150px] flex-col items-center justify-center mt-[150px] w-[65%] h-[68vh]  pb-[170px] px-[140px] mb-[150px] bg-gradient-to-r from-violet-400 to-white">
      <h1 className="text-4xl color-[#171717] m-5 font-bold">
        Get Exclusive Offer On Your Email
      </h1>
      <p className="text-lg color-[#171717] m-5 py-[5px] font-bold">
        Subsribe to our newsletter and stay updated
      </p>
      <div className="flex  items-center  justify-between bg-white rounded-full  ">
        <input
          className="text-[#616161]  text-md outline-none border-none ml-[30px] w-[500px]"
          type="email"
          placeholder="Your Email id"
        />
        <button className="rounded-full cursor-pointer bg-black text-white font-md h-[70px] w-[200px]">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLEtter;
