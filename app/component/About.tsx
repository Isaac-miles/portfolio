import React from 'react'
import { Roboto } from 'next/font/google'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function AboutMe() {
  return (
    // <div className='flex justify-between bg-black/50 w-full h-20 '>
    <section id='about' className={` bg-[#F6F0F4] ${inter.className}  w-full lg:px-24 bg-white pt-4`}>
      <h1 className='text-[#2B2620] font-semibold uppercase m-auto text-center  text-xl '>About</h1>
      <div className='lg:flex w-full h-full  justify-center p-4 '>

        <div id='boi' className='w-full flex flex-col justify-center items-center lg:px-16 '>
          <h1 className='text-4xl font-bold text-[#2B2620] uppercase'>Personal Info</h1>
          <p className='text-[#F49F37] font-semibold mt-2'>Profile Summary</p>
        </div>

        <div id='image' className='h-[50%] w-[100%] md:w-full flex items-center justify-center bg-white flex-wrap text-white overflow-clip'>
          <h1 className='text-xl font-bold text-white '>Hello&nbsp;!</h1>
          <p className='text-[#2B2620] m-1 p-2'>Hi, my name is Isaac, I have sufficient background and knowledge in programming languages to include front-end technologies and back-end.
           Passionate about cutting-edge technology and solving real-world problems. Proficient in frontend skills for multiple applications. 
           Possesses good coding ability both in producing clean and efficient code and debugging and understanding large codebases.</p>
        </div> 
     </div>
   
    </section>
  )
  }
