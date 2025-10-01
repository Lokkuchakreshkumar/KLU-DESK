import React from 'react'
import { CiHeart } from "react-icons/ci";

const Quality = () => {
  return (
    <div className="flex sm:w-[20%] flex-col mt-4 items-center">
               <div className='flex w-[20%] sm:w-[30%] justify-center py-6 items-center bg-neutral-900 shadow-lg shadow-white/8 border border-white/30  rounded-xl  text-amber-400'>
               <CiHeart className='text-3xl'/>
               </div>
               <div className='text-white mt-4 text-xl  '>Quality</div>
               <div className='text-white/40 text-center mt-4'>Ensuring all resources are verified, up-to-date, and aligned with current curriculum standards.</div>
           </div>

  )
}

export default Quality