import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-9'>
        <div className='flex items-center gap-4'>
            <img src={footer_logo} alt="" />
            <p className='text-[#383838] text-3xl font-semibold'>SHOPPER</p>
        </div>
        <ul className='flex gap-5 text-md text-[#252525]'>
            <li className='pointer'>Company</li>
            <li className='pointer'>Product</li>
            <li className='pointer'>About</li>
            <li className='pointer'>Offices</li>
            <li className='pointer'>Contact</li>
        </ul>
        <div className='flex gap-4 mb-[5px]  w-[190px]'>
            <div >
                <img className='p-3 pb-2 bg-[#fbfbfb] border' src={instagram_icon} alt="" />
            </div>
            <div>
                <img className='p-3 pb-2 bg-[#fbfbfb] border'  src={pintester_icon} alt="" />
            </div>
            <div>
                <img className='p-3 pb-2 bg-[#fbfbfb] border'  src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className=' flex flex-col items-center  gap-4 text-[#1a1a1a] w-[100%] text-lg mb-[10px] p-3' >
            <hr className='w-[80%] h-[3px] rounded-sm bg-[#c7c7c7]'/>
            <p>Cpoyright @2024 - ALl Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer