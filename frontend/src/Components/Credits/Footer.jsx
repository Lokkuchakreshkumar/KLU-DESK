import React from 'react'
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (

    <div className='flex m-4 w-full flex-col text-white items-center'>
        <hr  className='my-4 border w-[95%] border-gray-400'/>
        <div>Made with &nbsp; <FaHeart className='inline text-red-500 drop-shadow-[0px_0px_15px_red]' /> &nbsp; by <a href="https://chakresh.vercel.app" target='_blank' className='text-lg underline'>Chakresh</a></div>

    </div>
  )
}

export default Footer