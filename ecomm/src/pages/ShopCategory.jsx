import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return <div>
    <img src={props.banners} alt="" />
  </div>;
};

export default ShopCategory;
