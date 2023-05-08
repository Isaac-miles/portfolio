import React from 'react'
import Link from 'next/link';
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
    <div className={`${inter.className} flex justify-around bg-[#2B2620] w-full -mt-4 `}> 
      <div id='social' className='flex items-center'>
        <ul className='flex gap-4 m-2 text-white'>
        <li><BsStackOverflow className='text-[#F49F37] text-2xl'/></li>
        <Link href={'https://linkedin.com/in/isaac-o-david-68826b206'} target='_blank'><li><FaLinkedinIn className='text-[#F49F37] text-2xl'/></li></Link>
        <Link href={'https://github.com/Isaac-miles?tab=repositories'} target='_blank'><li><FaGithub className='text-[#F49F37] text-2xl'/></li></Link>
        </ul>
      </div>
      <div id='info' className='hidden leg:flex  md:flex items-center'>
        <ul className='flex gap-8 m-2 text-white'>
        <Link href={'mailto:davidisaacomokafe@gmail.com'}><li className='flex  gap-2  items-center text-lg'><VscMail className='text-[#F49F37] text-2xl'/>davidisaacomokafe@gmail.com</li></Link> 
         <Link href="tel:7067310999"> <li className='flex  gap-2  items-center text-lg'><VscCallIncoming className='text-[#F49F37] text-2xl'/>7067310999</li></Link>
        </ul>
      </div>
    </div>
  )
}
