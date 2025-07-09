import React from 'react'
import { CiHeart } from "react-icons/ci";

const Quality = () => {
  return (
    <div className="flex w-full sm:w-1/2 flex-col mt-4 items-center">
               <div className='flex w-[20%] sm:w-[8%] justify-center py-6 items-center bg-[#0B111E] hover:bg-[#213659] shadow-lg shadow-black border border-white/30  rounded-xl  text-cyan-400'>
               <CiHeart className='text-3xl'/>
               </div>
               <div className='text-white mt-4 text-xl  '>Quality</div>
               <div className='text-white/40 sm:px-24 text-center mt-4'>Ensuring all resources are verified, up-to-date, and aligned with current curriculum standards.</div>
           </div>

  )
}

export default Quality