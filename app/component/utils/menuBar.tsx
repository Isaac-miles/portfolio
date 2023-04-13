import React from 'react'

import { Poppins } from 'next/font/google'
import { HiOutlineBars3,HiOutlineXMark } from "react-icons/hi2";


const roboto = Poppins({
  weight: '300',
  style: ['normal'],
  subsets: ['latin'],
}) 

export default function MenuBar() {
  return (
    <div className={`sticky z-30 bg-[#F6F0F4] ${roboto.className}  top-0 flex justify-end lg:justify-between w-full  border-b-2 m-0`}>
      <div className='hidden lg:flex md:flex justify-between w-full '>
          <div id='info' className='flex justify-between'>
              <span className=' m-2 text-xl cursor-pointer'>ᴵˢᵃᵃᶜ.ᵐⁱˡᵉˢ</span>
            </div>

            <div id='social' className='flex items-center'>
              <ul className='flex gap-4 m-2 text-white'>
              <li className='menubar '>Home</li>
              <li className='menubar'>About</li>
              <li className='menubar'>Services</li>
              <li className='menubar'>Contact</li>
              </ul>
            </div>
      
            <div id='quote' className='flex items-center'>
              <button type="button" className='p-1 mr-1 
              rounded-md bg-gradient-to-r from-[#f1d6b4] to-[#F49F37] 
              hover:from-pink-500 hover:to-yellow-500 text-[[#2B2620]]'>Download Resume</button>
            </div>
        </div>

            <div  className='lg:hidden  md:hidden m-2 '>
              <button type="button" className='p-1  rounded-sm bg-gradient-to-r from-[#f1d6b4] to-[#F49F37]'>
                <HiOutlineBars3 className='text-2xl w-full text-[#2B2620]'/></button>
            </div>
            <div  className='lg:hidden  md:hidden m-2 '>
              <button type="button" className='p-1  rounded-sm bg-gradient-to-r from-[#f1d6b4] to-[#F49F37]'>
                <HiOutlineXMark className='text-2xl w-full text-[#2B2620]'/></button>
            </div>
        
    </div>
  )
}
