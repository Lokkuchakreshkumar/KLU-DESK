import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import apeksha from '../../../public/Adobe Express - file (4).png'

const Join = () => {
  return (
    <div className='flex flex-col   m-4 rounded-xl bg-neutral-900 border border-black p-4 mt- 4 items-center justify-center'>
        <div className='text-white font-bold text-2xl'>Join Our Mission</div>
        <div className='text-white/50 text-center mt-4'>Want to make a difference? Join our growing community of student contributors and help your peers succeed.</div>
        <div className='flex mt-4 sm:space-x-8  '>
          <a  target='_blank' href="https://wa.me/918688913488?text=Hey%20Chakresh%2C%20we%20want%20to%20contribute%20to%20KLU%20DESK

" className='p-4 border border-black text-white rounded-lg hover:bg-cyan hover:text-black hover:bg-amber-400 hover:scale-105 hover:shadow-lg  hover:shadow-amber-500/50'>Contribute</a>
<a target='_blank' href="https://chat.whatsapp.com/GSfZoEOlE809OSQFQj2j0c?mode=r_t" className='border  border-green-500 hover:shadow-lg hover:shadow-green-500/50 text-green-500  p-4 ml-2 bg-transparent hover:rounded-xl hover:bg-green-500 hover:text-white'><FaWhatsapp className='inline mr-4 text-green-500s'/>Join our Community</a>
        </div>
        <a href='https://t.me/+5BUV-tlZKmViMmE9' className='p-2 py-3 mt-4 flex hover:bg-black gap-x-8 hover:text-amber-400 hover:shadow-xl hover:shadow-black hover:cursor-pointer  sm:w-[35%] w-[90%] items-center rounded-xl justify-center text-amber-500  border border-amber-400'>
           <img src={apeksha} className='sm:w-[10%] w-[20%]' alt="" /><span>Join Y25 Apeksha </span>
        </a>

    </div>
  )
}

export default Join