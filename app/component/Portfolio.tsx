import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Roboto } from 'next/font/google'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function AboutMe() {
  return (
    <section id='Portfolio' className={`${inter.className}  w-full h-96 bg-[url('/works.png')] `}>
    <div className="flex rounded-md text-center w-full h-full bg-black/50 " >
      <div className='flex flex-col w-full lg:flex md:flex-row  justify-center gap-1 p-1 '>
     
        <div id='boi' className="w-full h-full  border-[#F6F0F4] border-[1px]">
       
          <div className="flex flex-col justify-center items-center rounded-md text-center w-full h-full bg-black/50 " >
          <p className='text-[#F6F0F4] font-light text-xl'>Fidelity Online Banking</p>
          <p  className='text-[#F6F0F4] font-light'>A production based web application for retail financial services</p>
          <Link href={'https://online.fidelitybank.ng/#/login'} target='_blank'>
          <button className='border-[1px] border-[#F6F0F4] p-3 m-4 text-white hover:bg-black'>Preview</button>
          </Link>
          </div>
        </div>
 
        <div id='boi' className="w-full h-full border-[#F6F0F4] border-[1px]">
      
          <div className="flex flex-col justify-center items-center rounded-md text-center w-full h-full bg-black/50" >
          <p className='text-[#F6F0F4] font-light text-xl'>Fidelity Corporate Online Banking</p>
          <p  className='text-[#F6F0F4] font-light'>A production based web application for corporate financial services</p>
          <Link href={'https://conb.fidelitybank.ng/#/login'} target='_blank'>
          <button className='border-[1px] border-[#F6F0F4] p-3 m-4 text-white hover:bg-black'>Preview</button>
          </Link>
          </div>
 
        </div>
     </div>
     </div>
    </section>
  )
  }
