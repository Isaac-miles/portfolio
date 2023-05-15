'use client'
import {useState} from 'react'
import Toggle from './toggle'
import {saveAs} from 'file-saver'
import { Poppins } from 'next/font/google'
import { HiOutlineBars3,HiOutlineXMark } from "react-icons/hi2";


const roboto = Poppins({
  weight: '300',
  style: ['normal'],
  subsets: ['latin'],
}) 

export default function MenuBar() {
const [toggle, setToggle] = useState(false)
 const setToggleHandler =()=>{
  setToggle(true)
 }
 const downloadHandler =()=>{
  saveAs('pdf/DavidIsaacOmokafe.CV.pdf')
 }
  return (
    <div className={`sticky z-30 bg-[#F6F0F4] ${roboto.className}  top-0 flex justify-end lg:justify-between w-full  border-b-2 m-0`}>
      <div className='hidden lg:flex md:flex justify-between w-full '>
          <div id='info' className='flex justify-between'>
              <span className=' m-2 text-xl cursor-pointer'>ᴵˢᵃᵃᶜ.ᵐⁱˡᵉˢ</span>
            </div>

            <div id='social' className='flex items-center'>
              <ul className='flex gap-4 m-2 text-white'>
              <li className="menubar">Home</li>
              <a href='#about'><li className='menubar'>About</li></a>
              <a href='#service'><li className='menubar'>Services</li></a>
              <a href='#Portfolio'><li className='menubar'>Portfolio</li></a>
              <a href=''><li className='menubar'>Contact</li></a>
              </ul>
            </div>
      
            <div id='quote' className='flex items-center'>
              <button type="button" className='p-1 mr-1 
              rounded-md bg-gradient-to-r from-[#f1d6b4] to-[#F49F37] 
              hover:from-pink-500 hover:to-yellow-500 text-[[#2B2620]]'
              onClick={()=>saveAs('pdf/DavidIsaacOmokafe.CV.pdf')}>Download Resume</button>
            </div>
        </div>
          {!toggle && ( <div  className='lg:hidden  md:hidden m-2 w-[44px]' onClick={()=>{setToggle(true)}}>
              <button type="button" className='p-1  rounded-sm bg-gradient-to-r from-[#f1d6b4] to-[#F49F37]'>
                <HiOutlineBars3 className='text-4xl w-full text-[#2B2620]'/></button>
            </div>)}

           {toggle && (<div  className='lg:hidden  md:hidden m-2  z-30 w-[44px]'  onClick={()=>{setToggle(false)}}>
              <button type="button" className='p-1  rounded-sm bg-gradient-to-r from-[#f1d6b4] to-[#F49F37]'>
                <HiOutlineXMark className='text-4xl w-full text-[#2B2620]'/></button>
            </div>)}
       {toggle && <Toggle downloadResume={downloadHandler}/>}
    </div>
  )
}
