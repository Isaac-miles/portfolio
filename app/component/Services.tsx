import React from 'react'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function AboutMe() {
  return (
    // <div className='flex justify-between bg-black/50 w-full h-20 '>
    <section id='service' className={` ${inter.className}  w-full lg:px-24 bg-white p-4  snap-start`}>
      <h1 className='text-[#2B2620] font-semibold uppercase m-auto text-center  text-xl '>Services</h1>
      <div className='flex flex-col lg:flex md:flex-row w-full  justify-center gap-1 p-1 '>

        <div id='boi' className="w-full  flex flex-col justify-center items-center  rounded-md bg-[url('/frontEnd.gif')] bg-no-repeat bg-center  bg-[length:500px_400px]">
          <div className="flex justify-center items-center rounded-md text-center w-full h-72 bg-black/50 " >
          <p className='text-white font-semibold text-xl'>Frontend Development</p>
          </div>

        </div>
        <div id='boi' className="w-full  flex flex-col justify-center items-center  rounded-md bg-[url('/backend.gif')] bg-no-repeat bg-center bg-contain ">
          <div className="flex justify-center items-center rounded-md text-center w-full h-72 bg-black/50" >

          <p className='text-white font-semibold text-xl'>Backend Development</p>
          </div>

        </div>
        <div id='boi' className="w-full  flex flex-col justify-center items-center  rounded-md bg-[url('/database.gif')] bg-no-repeat bg-center  bg-[length:500px_400px]">
          <div className="flex justify-center items-center rounded-md text-center w-full h-72 bg-black/50" >

          <p className='text-white font-semibold text-xl'>DataBase</p>
          </div>

        </div>
     </div>
   
    </section>
  )
  }
