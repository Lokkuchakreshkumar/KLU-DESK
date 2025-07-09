import React from 'react'
import { FaMedal } from "react-icons/fa";

const Card2 = () => {
  return (
   <div className='flex flex-col sm:w-[45%] shadow-xl shadow-black w-full m-4  p-4 mt-8 bg-[#080E1D]  rounded-xl items-center'>
         <div className='flex items-center'>
             <div className='p-4  bg-[#0F2247] rounded-xl text-cyan-400'>
 <FaMedal/>
             </div>
           <div className='flex flex-col items-center p-4'>
               <div className='text-white px-4 text-3xl  flex-grow'>
                 Y.Pavan Kalyan
             </div>
             
             <div className='  text-white/50 text-sm  '>CSE 2nd Year</div>
           </div>
 
         </div>
         <div>
            <div className='bg-clip-text text-transparent text-2xl bg-linear-to-r from-sky-400 to-cyan-200'>Content Curator</div>
         </div>
         <div className='text-white/80 mt-4 text-sm text-center'>
   Curated and verified 50+ academic resources across multiple subjects
         </div>
     </div>
  )
}

export default Card2