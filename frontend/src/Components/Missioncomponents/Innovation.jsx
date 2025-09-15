import React from 'react'
import { LuLightbulb } from "react-icons/lu";

const Innovation = () => {
  return (
    <div className="flex w-full sm:w-1/2 flex-col mt-4 items-center">
               <div className='flex w-[20%] sm:w-[8%] justify-center py-6 items-center bg-neutral-900 shadow-lg shadow-black border border-white/30  rounded-xl  text-amber-400'>
               <LuLightbulb className='text-3xl'/>
               </div>
               <div className='text-white mt-4 text-xl  '>Innovation</div>
               <div className='text-white/40 sm:px-24 text-center mt-4'>Continuously improving our platform with new features and better resource organization.</div>
           </div>

  )
}

export default Innovation