import React from 'react'
import { IoPeople } from "react-icons/io5";
const Community = () => {
  return (
     <div className="flex w-full  sm:w-1/2 flex-col mt-4 items-center">
           <div className='flex w-[20%] sm:w-[8%] justify-center py-6 items-center bg-[#0B111E] hover:bg-[#213659] shadow-lg shadow-black border border-white/30  rounded-xl  text-cyan-400'>
           <IoPeople className='text-3xl'/>
           </div>
           <div className='text-white mt-4 text-xl  '>Community</div>
           <div className='text-white/40 text-center sm:px-24 mt-4'>Building a collaborative environment where students share knowledge and support each other's success.</div>
       </div>
  )
}

export default Community