import React from "react";
import data_product from "../Assets/data";
import Item from "../items/Item";

const RelatedProducts = () => {
  return (
    <div className="flex flex-col items-center gap-3 h-[90vh]">
      <h1 className="text-[#171717] font-semibold text-4xl">Related Products</h1>
      <hr className=" w-[165px] border border-black h-[3px] bg-black" />
      <div className="flex gap-[30px]   ">
        {data_product.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
