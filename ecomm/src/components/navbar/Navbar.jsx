import React, { useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  //21:30

  const [menu, setMenu] = useState("shop");
  return (
    <div className="flex justify-around p-9 shadow-md">
      <div className="flex items-center gap-1">
        <img src={logo} alt="" />
        <p className="text-[#171717] text-3xl font-bold">SHOPPER</p>
      </div>
      <ul className="flex items-center gap-[30px] text-[#626262] text-md">
        <li
          className="flex flex-col justify-center gap-3 cursor-pointer"
          onClick={() => setMenu("shop")}
        >
          <Link to="/">Shop</Link>
          {menu === "shop" ? (
            <hr className="h-[2px] w-[95%] border border-green-400" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col justify-center gap-3 cursor-pointer"
          onClick={() => setMenu("men")}
        >
          <Link to="/mens">Men</Link>
          {menu === "men" ? (
            <hr className="h-[2px] w-[95%] border border-green-400" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col justify-center gap-3 cursor-pointer"
          onClick={() => setMenu("women")}
        >
          <Link to="/womens">Women</Link>
          {menu === "women" ? (
            <hr className="h-[2px] w-[95%] border border-green-400" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col justify-center gap-3 cursor-pointer"
          onClick={() => setMenu("kids")}
        >
          <Link to="/kids">Kids</Link>
          {menu === "kids" ? (
            <hr className="h-[2px] w-[95  %] border border-green-400" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="flex items-center gap-[45px]">
        <Link to="/login">
          <button className="w-[165px] h-[60px] outline-none  rounded-3xl border border-green-300 hover:bg-green-400">Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="flex items-center mt-[-52px] ml-[-72px] rounded-xl px-[8px] bg-red-500 text-white">
          0
        </div>
      </div>
    </div>
  );
};

export default Navbar;
