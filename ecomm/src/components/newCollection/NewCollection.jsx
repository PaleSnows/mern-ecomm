import React from "react";
import new_collection from "../Assets/new_collections";
import Item from "../items/Item";

const NewCollection = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-[#171717] text-xl font-bold">NEW COLLECTIONS</h1>
      <hr className="w-[210px] h-[5px] rounded-sm bg-[#252525]" />
      <div className="grid grid-cols-4  mt-[50px] gap-[30px]">
        {new_collection.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          ></Item>
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
