import React from 'react'

import { Roboto } from 'next/font/google'
import { Inter } from 'next/font/google'

import { VscMail,VscCallIncoming } from "react-icons/vsc";
import { BsStackOverflow } from "react-icons/bs";
import { FaGithub,FaTwitter,FaLinkedinIn } from  "react-icons/fa";

const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({
  weight: '300',
  style: ['normal'],
  subsets: ['latin'],
}) 

export default function Nav() {
  return (
    // <div className='fixed flex justify-around bg-black/50 w-full h-15 z-20 '>
    <div className={`${inter.className} hidden lg:flex justify-around bg-[#2B2620] w-full h-15 md:flex`}> 

      <div id='social' className='flex items-center'>
        <ul className='flex gap-4 m-2 text-white'>
        <li><BsStackOverflow className='text-[#F49F37]'/></li>
        <li><FaLinkedinIn className='text-[#F49F37]'/></li>
        <li><FaGithub className='text-[#F49F37]'/></li>
        </ul>
      </div>
      <div id='info' className='flex items-center'>
        <ul className='flex gap-8 m-2 text-white'>
          <li className='flex  gap-2  items-center text-sm'><VscMail className='text-[#F49F37]'/>info@gmail.com</li>
          <li className='flex  gap-2  items-center text-sm'><VscCallIncoming className='text-[#F49F37]'/>7067310999</li>
          {/* <li className='flex  gap-2  items-center text-sm'><VscMail className='text-[#F49F37]'/>info@gmail.com</li>
          <li className='flex  gap-2  items-center text-sm'><VscCallIncoming className='text-[#F49F37]'/>81838343</li> */}
        </ul>
      </div>
    </div>
  )
}
