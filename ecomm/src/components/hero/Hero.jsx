import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
const Hero = () => {
  return (
    <div className="h-[100vh] bg-gradient-to-r from-violet-400 to-white flex">
      <div className="flex flex-1 flex-col justify-center gap-[20px] leading-3 mx-[120px]" >
        <h2 className="text-[#090909] text-2xl font-semibold">New Arrivals Only</h2>
        <div className="flex items-center gap-[20px]">
          <p className="text-[#171717] text-6xl font-bold">new</p>
          <img className="w-[65px]" src={hand_icon} alt="" />
        </div>
        <p className="text-[#171717] text-6xl font-bold">collections</p>
        <p className="text-[#171717] text-6xl font-bold" >for everyone</p>
        <div className="flex items-center justify-center gap-4 w-[230px] h-[53px]  font-medium rounded-3xl mt-[30px] bg-[#ff4141] text-white">
          <div className="font-medium">Latest Collection</div>
          <img className="w-[24px]" src={arrow_icon} alt="" />
        </div>
      </div>
      <div className=" flex justify-center">
            <img src={hero_image} alt="" />
      </div>
     
    </div>
  );
};

export default Hero;
