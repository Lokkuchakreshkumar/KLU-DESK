import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const Join = () => {
  return (
    <div className='flex flex-col   m-4 rounded-xl bg-[#030B1C] border border-black p-4 mt- 4 items-center justify-center'>
        <div className='text-white font-bold text-2xl'>Join Our Mission</div>
        <div className='text-white/50 text-center mt-4'>Want to make a difference? Join our growing community of student contributors and help your peers succeed.</div>
        <div className='flex mt-4 sm:space-x-8  '>
          <a href="https://wa.me/918688913488?text=Hey%20Chakresh%2C%20we%20want%20to%20contribute%20to%20KLU%20DESK

" className='p-4 border border-white text-white rounded-lg hover:bg-cyan hover:text-black hover:bg-cyan-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50'>Contribute</a>
<a href="https://chat.whatsapp.com/GSfZoEOlE809OSQFQj2j0c?mode=r_t" className='border  border-green-500 hover:shadow-lg hover:shadow-green-500/50 text-green-500  p-4 ml-2 bg-transparent hover:rounded-xl hover:bg-green-500 hover:text-white'><FaWhatsapp className='inline mr-4 text-green-500s'/>Join our Community</a>
        </div>

    </div>
  )
}

export default Join