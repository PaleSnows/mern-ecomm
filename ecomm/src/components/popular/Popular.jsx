import React from "react";
import data_product from "../Assets/data";
import Item from "../items/Item";

const Popular = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-[#171717] text-xl font-bold">POPULAR IN WOMEN</h1>
      <hr className="w-[210px] h-[5px] rounded-sm bg-[#252525]" />
      <div className="flex w-[1200px]  mt-[50px] gap-7">
        {data_product.map((item,i) => {
         return <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        })}
      </div>
    </div>
  );
};

export default Popular;
