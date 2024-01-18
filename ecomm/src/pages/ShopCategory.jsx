import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import Item from "../components/items/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div>
      <img
        className="block m-[30px] ml-[120px] w-[82%]"
        src={props.banners}
        alt=""
      />
      <div className="flex justify-between items-center ml-[120px]">
        <p>
          <span className="font-bold">Showing 1-12</span> out of 36 products
        </p>
        <div className="py-2 px-7 mr-[120px] mb-[8px] flex rounded-3xl border">
          Sort by{" "}
          <img
            className="w-[8px] h-[12px] mt-[8px] ml-[6px]"
            src={dropdown_icon}
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-[40px] gap-x-[338px] max-w-[70%] mx-[120px]">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="flex justify-center items-center border w-[200px] font-semibold text-md mb-[30px] ml-[700px] mt-[50px] bg-[#ededed] text-[#787878] h-[50px] rounded-full">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
