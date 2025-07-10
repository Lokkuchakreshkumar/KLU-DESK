import React from 'react'
import { IoIosDocument } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { Worker, Viewer } from '@react-pdf-viewer/core';

const Card = ({type,title,subject,year,semester,url}) => {
    const colorMap = {
        pyq:'text-green-500',
        'IMP Questions':'text-orange-500',
        Notes:'text-cyan-500'
    }
    let yearMap = {
        1 : 'st year',
        2: 'nd year',
        3: 'rd year',
        4:'th year'
    }
    function convertDriveLink(shareLink) {
  const match = shareLink.match(/\/d\/(.+?)\//);
  if (!match) return null;
  return `https://drive.google.com/uc?export=download&id=${match[1]}`;
}
  const fileId = url?.match(/\/d\/(.*?)\//)?.[1];
  const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
const handlepreview = ()=>{
   window.open(previewUrl,'_blank')
}
  return (
    <div className='flex flex-col rounded-2xl m-8 items-start w-[95%] sm:w-[25%]  justify-start border bg-[#14274A] border-black p-8'>
        <div className='flex items-center'>
            <div className=' bg-[#2d56a9] text-cyan-500 flex justify-center items-center p-2 rounded-lg'><IoIosDocument className='inline '/></div>
            <div className={`p-2 px-4 ml-4 rounded-xl mono ${colorMap[type]} bg-white/10 backdrop-blur-3xl`}>{type}</div>
        </div>
        <div className='text-white text-xl mt-4 font-bold'>
            {title}
        </div>
        <div className='mt-4 text-white/50 outfit'>{subject}</div>
        <div className='text-white/50 flex items-center outfit mt-4'><FaCalendarAlt className='inline'/><span className='ml-4'></span>{year}{yearMap[year]} <span className='flex items-center mx-2 justify-center '>&#x2022;</span>Semester&nbsp;{semester}</div>


<button onClick={handlepreview} className='p-4 bg-cyan-transparent border border-white rounded-xl text-white  hover:bg-black w-full mt-4 hover:cursor-pointer'>Preview</button>
<a href={convertDriveLink(url)} className='w-full flex justify-center border border-cyan-500 mt-4 p-4 text-white rounded-2xl hover:bg-cyan-500 hover:cursor-pointer hover:shadow-xl hover:shadow-cyan-500/50'>Downlaod in Drive</a>
    </div>
  )
}

export default Card