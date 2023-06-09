import Link from "next/link"
import {VscMail} from "react-icons/vsc";
type ToggleProps = {
  downloadResume:()=>void
}
export default function Toggle({downloadResume}:ToggleProps){
  return(
    <div className="fixed bg-black/50 w-full h-full z-20 left-0 top-0">
      <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-lg flex flex-col gap-6">
        <button 
        className="bg-[#F49F37] text-md text-white py-2 px-4 rounded-lg"
        onClick={downloadResume}
        >
          Download Resume
        </button>


        <button 
        className="bg-[#F49F37] text-md text-white py-2 px-4 rounded-lg">
          <Link href={'mailto:davidisaacomokafe@gmail.com'}><li className='flex  gap-2  items-center text-sm'>
            <VscMail className='text-[#F49F37] text-2xl'/>Contact Me</li></Link> 
        </button>
      </div>
    </div>
  )
}