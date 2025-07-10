import React, { useEffect, useState } from 'react'
import { SiStudyverse } from "react-icons/si";
import { useParams, } from 'react-router-dom'
import axios from 'axios'
import Card from './Card.jsx'


import { IoIosWarning } from "react-icons/io";


const Resource = () => {
  const RENDER_URI = import.meta.env.VITE_RENDER_URI
    let [data,setData] = useState([])
    let [loading,setLoading] = useState(true)
      const params = useParams()
    const {year,semester} = params
    useEffect( ()=>{
   const getResources = async()=>{
        try {
         let data = await axios.get(`${RENDER_URI}/${year}/${semester}`)
                console.log(data.data)
                setData(data.data)
       } catch (error) {
        console.log(error)
       } finally{
        setLoading(false)
       }
    
   }
   getResources();
       
},[])
  
  return (
    <div className='bluespotlight min-h-screen'>
          <div className="fixed shadow-xl/30  z-50 flex items-center justify-between strict text-3xl  backdrop-blur-sm  w-full h-16" >
              <span className=" text-white "><SiStudyverse className="inline text-cyan-400 ml-4 drop-shadow-[0px_0px_15px_cyan]"/><span className="font-semibold text-lg sm:text-xl p-4 py-1">KLU DESK</span></span>
              <a href="/" className="text-white text-xl border inset-shadow-xl inset-shadow-black  sm:mr-12 mr-4 border-white rounded-3xl p-3">Resources</a>
                </div>
                {loading &&  <div className='pt-20 flex justify-center'>
              <div className=' p-4 rounded-xl w-[95%] text-center text-white border border-yellow-500'><IoIosWarning className='text-yellow-400 mr-4 inline text-2xl' />If your seeing blank page this is due to we are running on free server ,wait for 10~30 seconds and refresh but the page will be back this is not any error</div>

           </div>}
         { !loading && data.length===0 && <div className='flex flex-col items-center   pt-20 text-white text-xl'><p className=''>We don't have resources for now</p>
         <div className='pt-12'>  <a href="https://wa.me/918688913488?text=Hey%20Chakresh%2C%20we%20want%20to%20contribute%20to%20KLU%20DESK

" className='p-4 border border-white text-white rounded-lg hover:bg-cyan hover:text-black hover:bg-cyan-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50'>Contribute</a></div></div>}
        <div className='flex flex-wrap justify-center items-center pt-20'>
      {
            data.map((el) => {
        return <Card id={el._id} type={el.type} title={el.title} subject={el.subject} year={el.year} semester={el.semester} url={el.url}/>
})
      }
        </div>

    </div>
  )
}

export default Resource