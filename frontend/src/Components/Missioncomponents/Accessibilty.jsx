import React from 'react'
import { FiTarget } from "react-icons/fi";

const Accessibilty = () => {
  return (
    <div className="flex w-full sm:w-1/2 flex-col mt-4  items-center justify-center">
        <div className='flex w-[20%] sm:w-[8%] justify-center py-6 shadow-lg shadow-black items-center bg-[#0B111E] hover:bg-[#213659] border border-white/30  rounded-xl  text-cyan-400'>
        <FiTarget className='text-3xl'/>
        </div>
        <div className='text-white mt-4 text-xl  '>Accessibility</div>
        <div className='text-white/40 text-center sm:px-24 mt-4'>Making quality educational resources available to every student, breaking down barriers to learning.</div>
    </div>
  )
}

export default Accessibilty