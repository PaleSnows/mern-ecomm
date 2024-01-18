import React from 'react'
import arrow_icon from "../Assets/breadcrum_arrow.png";

const BreadCrum = ({product}) => {
    
  return (
    <div className='flex items-center gap-[5px] text-[17px] text-[#5e5e5e] font-medium text-transform: capitalize ml-[200px] my-[50px]'>
        HOME <img src={arrow_icon} alt="" />
        SHOP <img src={arrow_icon} alt="" />
        {product.category}
        <img src={arrow_icon} alt="" />
        {product.name}
    </div>
  )
}

export default BreadCrum