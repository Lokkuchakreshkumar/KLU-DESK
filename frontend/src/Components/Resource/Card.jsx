import React from 'react'
import { RiGeminiLine } from "react-icons/ri";
import { IoIosDocument } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Card = ({type,title,subject,year,semester,url,id}) => {
  const Navigate = useNavigate();
  let isDrive = url.includes('drive.google')
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
    async function Chat (id){
      Navigate(`/chat/${id}`)
    }

   let PreviewLink = (url)=>{
    let isCloud;
   let isDrive = url.includes('drive.google.com')
    if(!isDrive) isCloud=true;

    if(isDrive){
     return drivePreviewUrl(url)
    }else{
     return url.replace(
    "/raw/upload/",
    "/raw/upload/fl_inline/"
  );
    }

    }
    function convertDriveLink(shareLink) {
  const match = shareLink.match(/\/d\/(.+?)\//);
  if (!match) return null;
  return `https://drive.google.com/uc?export=download&id=${match[1]}`;
}
let drivePreviewUrl = (url)=>{
    const fileId = url?.match(/\/d\/(.*?)\//)?.[1];
  const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  return previewUrl;
}
function DownloadLink(url){
   let isCloud;
   let isDrive = url.includes('drive.google.com')
    if(!isDrive) isCloud=true;

    if(isDrive){
      return convertDriveLink(url)
    }else{
      return url
    }

}
  return (
    <div className='flex flex-col rounded-2xl m-8 items-start sm:w-[30%] w-[90%]   justify-start border bg-[#121211] border-black p-8'>
        <div className='flex items-center'>
            <div className=' bg-[#2d56a9] text-cyan-500 flex justify-center items-center p-2 rounded-lg'><IoIosDocument className='inline '/></div>
            <div className={`p-2 px-4 ml-4 rounded-xl mono ${colorMap[type]} bg-white/10 backdrop-blur-3xl`}>{type}</div>
        </div>
        <div className='text-white text-xl mt-4 font-bold'>
            {title}
        </div>
        <div className='mt-4 text-white/50 outfit'>{subject}</div>
        <div className='text-white/50 flex items-center outfit mt-4'><FaCalendarAlt className='inline'/><span className='ml-4'></span>{year}{yearMap[year]} <span className='flex items-center mx-2 justify-center '>&#x2022;</span>Semester&nbsp;{semester}</div>


{isDrive && <div className='w-full'>
  <a href={PreviewLink(url)} target='_blank' className='p-4 bg-cyan-transparent border border-white rounded-xl text-white  hover:bg-black w-full flex justify-center mt-4 hover:cursor-pointer'>Preview</a>
<a href={DownloadLink(url)}  className='w-full flex justify-center border border-cyan-500 mt-4 p-4 text-white rounded-2xl hover:bg-cyan-500 hover:cursor-pointer hover:shadow-xl hover:shadow-cyan-500/50'>Download in Drive</a>
  </div>}
  {
    !isDrive && <div className='w-full'>
      <a href={url} target='_blank'  className='w-full flex justify-center border border-cyan-500 mt-4 p-4 text-white rounded-2xl hover:bg-cyan-500 hover:cursor-pointer hover:shadow-xl hover:shadow-cyan-500/50'>Preview / Download</a>

    </div>
  }

    </div>
  )
}

export default Card