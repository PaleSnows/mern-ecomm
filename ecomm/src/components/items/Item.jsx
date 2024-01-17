import React from 'react'

const Item = (props) => {
  return (
    <div className='w-[350px] hover:scale-105 ease-in duration-300  '>
        <img className=' py-2' src={props.image} alt="" />
        <p className='mx-[6px]'>{props.name}</p>
        <div className='flex gap-5'>
            <div className='text-[#374151] font-semibold text-lg'>${props.new_price}</div>
            <div className='text-[#8c8c8c] text-lg font-medium line-through'>${props.old_price}</div>
        </div>
    </div>
  )
}

export default Item