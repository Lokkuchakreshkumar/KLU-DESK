import React, { useEffect, useState } from 'react'
import { SiStudyverse } from "react-icons/si";
import { useParams, } from 'react-router-dom'
import axios from 'axios'
import Card from './Card.jsx'


const Resource = () => {
    let [data,setData] = useState([])
      const params = useParams()
    const {year,semester} = params
    useEffect( ()=>{
        const getresources = async(year,semester) =>{
                let data = await axios.get(`https://klu-desk.onrender.com/${year}/${semester}`)
                console.log(data.data)
                return data.data
        }
        async function sendData (){
              let realdata =  await getresources(year,semester);
      setData(realdata)
        }
    
        sendData()
},[])
  
  return (
    <div className='bluespotlight min-h-screen'>
          <div className="fixed shadow-xl/30  z-50 flex items-center justify-between strict text-3xl  backdrop-blur-sm  w-full h-16" >
              <span className=" text-white "><SiStudyverse className="inline text-cyan-400 ml-4 drop-shadow-[0px_0px_15px_cyan]"/><span className="font-semibold text-lg sm:text-xl p-4 py-1">KLU DESK</span></span>
              <a href="/" className="text-white text-xl border inset-shadow-xl inset-shadow-black sm:hidden mr-4 border-white rounded-3xl p-3">Resources</a>
                </div>
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