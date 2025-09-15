import React from 'react'
import { FaMedal } from "react-icons/fa";

const Card1 = () => {
  return (
    <div className='flex flex-col w-full shadow-xl shadow-black m-4 sm:w-[45%]  p-4 mt-8 bg-[#121212]  rounded-xl items-center'>
        <div className='flex items-center'>
            <div className='p-4  bg-[#0F2247] rounded-xl text-cyan-400'>
<FaMedal/>
            </div>
          <div className='flex flex-col items-center p-4'>
              <div className='text-white px-4 text-3xl  flex-grow'>
                Chakresh
            </div>
            
            <div className='  text-white/50 text-sm  '>CSE 2nd Year</div>
          </div>

        </div>
        <div>
           <div className='bg-clip-text text-transparent text-2xl bg-linear-to-r from-sky-400 to-cyan-200'>Platform Developer</div>
        </div>
        <div className='text-white/80 mt-4 text-sm text-center'>
   Full-stack development, UI/UX design, and platform architecture
        </div>
    </div>
  )
}

export default Card1