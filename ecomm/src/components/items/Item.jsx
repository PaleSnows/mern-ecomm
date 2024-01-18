import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="w-[350px] hover:scale-105 ease-in duration-300  ">
      <Link to={`/product/${props.id}`}>
      <img onClick={window.scrollTo(0,0)} className=" py-2" src={props.image} alt="" />
      </Link>
      <p className="mx-[6px]">{props.name}</p>
      <div className="flex gap-5">
        <div className="text-[#374151] font-semibold text-lg">
          ${props.new_price}
        </div>
        <div className="text-[#8c8c8c] text-lg font-medium line-through">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
