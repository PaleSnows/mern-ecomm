import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount,all_product, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="mx-[170px] my-[100px]">
      <div className="grid grid-cols-6 items-center gap-[75px] py-[20px] px-[0px] text-[#454545] text-lg font-semibold">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-[3px] bg-[#e2e2e2] " />
      {all_product.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div>
              <div className="h-[120px] grid grid-cols-6 items-center pb-[12px] gap-[75px] py-[20px] px-[0px] text-[#454545] text-base font-medium">
                <img className="h-[75px]" src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.new_price}</p>
                <button className="w-[54px] h-[50px] border">
                  {cartItems[item.id]}
                </button>
                <p>${item.new_price * cartItems[item.id]}</p>
                <img
                  className="w-[12px] mx-[40px] my-[0] cursor-pointer"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(item.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="flex my-[100px] mx-[0px]">
        <div className=" flex flex-1 gap-[40px] flex-col mr-[200px]">
          <h1>Cart Total</h1>
          <div>
            {" "}
            <div className="flex justify-between py-[10px] px-[0px]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between py-[10px] px-[0px]">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between py-[10px] font-bold px-[0px]">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
        <button className="w-[252px] h-[52px]  bg-[#ff5a5a] border-none outline-none text-[#fff] font-semibold text-base">
          PROCEED TO CHECKOUT
        </button>
        </div>
      <div className="flex-1 text-base font-medium">
        <p className="text-[#555]" >If you have a promo code, Enter it here</p>
        <div className="w-[495px] mt-[15px] flex pl-[20px] h-[53px] bg-[#eaeaea]">
          <input className='border-none outline-none bg-transparent text-base w-[330px] h-[50px]' type="text" placeholder="Promo Code" />
          <button className="w-[165px] h-[53px] text-base bg-black text-white ">Submit</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CartItems;
