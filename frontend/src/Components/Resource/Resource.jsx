import React, { useEffect, useState } from 'react'
import apeksha from '../../../public/Adobe Express - file (4).png'
import { useParams, } from 'react-router-dom'
import axios from 'axios'
import Card from './Card.jsx'
import { Hearts } from 'react-loader-spinner'


import { IoIosWarning } from "react-icons/io";


const Resource = () => {
     let RENDER_URI;
let env = "production";
if(env == "production"){
 RENDER_URI= import.meta.env.VITE_RENDER_URI
}
else{
  RENDER_URI = `http://localhost:8080`
}
    let [data,setData] = useState([])
    let [loading,setLoading] = useState(true)
    let [newloading,setNewloading] = useState(false);
    let [selected,setSelected] = useState("All");
    let [unique,setUnique] = useState([]);
      const params = useParams()
    const {year,semester} = params
    let fetchfilter = async(e)=>{
     e.preventDefault();
    if(selected=="All"){
        let data = await axios.get(`${RENDER_URI}/${year}/${semester}`)
               let realdata = data.data;
               setData(realdata);
    }else{
      setNewloading(true);
      let data =await  axios.post(`${RENDER_URI}/fetch`,{input:selected});
      let realdata = data.data;
      setData(realdata);
      setNewloading(false);
    }
    }
    let nameret = (e)=>{
     
      console.log('i am triggered')
      console.log(e.target.value);
      setSelected(e.target.value)
    }
    useEffect( ()=>{
   const getResources = async()=>{
        try {
         let data = await axios.get(`${RENDER_URI}/${year}/${semester}`)
                console.log(data.data)
                setData(data.data)
                let subjects = data.data.map((el=>el.subject));
                let unique = Array.from(new Set(subjects));
                setUnique(unique);
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
              <span className=" text-white flex "><img src={apeksha}  className='sm:w-[5%] w-[20%]' alt="" /><span className="font-semibold text-lg sm:text-xl p-4 py-1">Apeksha X KLUDESK </span></span>
              <a href="/#resource" className="text-white text-xl border inset-shadow-xl inset-shadow-black sm:mr-12 mr-4 border-white rounded-3xl p-3">Resources</a>
                </div>

            
                {loading &&  <div className='flex flex-col justify-center items-center'><div className='pt-20 flex justify-center'>
              <div className=' p-4 rounded-xl w-[95%] text-center text-white border border-yellow-500'><IoIosWarning className='text-yellow-400 mr-4 inline text-2xl' />If your seeing blank page this is due to we are running on free server ,wait for 10~30 seconds and refresh but the page will be back this is not any error</div>

           </div>
             <div>
              <Hearts
  height="80"
  width="80"
  color="red"
  ariaLabel="hearts-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
        </div></div>}
       
        <div className='flex flex-wrap justify-center items-center pt-20'>
          {
            !loading &&     <div className='pt-6 w-full flex justify-center items-center '>
              
                  <form   className='w-full flex items-center justify-center p-2 '>
                    <select onChange={nameret}  name="" id="" className='border w-[65%] p-4 rounded-xl bg-[#171717] text-white' >
                     <option value={"All"} selected>All</option>
                      {
                      
                      unique.map((el)=>{
                       return <option value={el}>{el}</option>
                        })
                      }
                    </select>
                    <button onClick={fetchfilter}  className='p-4 hover:cursor-pointer m-4 h-[85%] rounded-3xl px-6 border border-white/50 bg-[#171717] text-white items-center'>Search</button>
                  </form>

                  
              
                </div>
          }
        
      { !loading && !newloading && 
        
            data.map((el) => {
        return <Card key={el._id} id={el._id} type={el.type} title={el.title} subject={el.subject} year={el.year} semester={el.semester} url={el.url}/>
})
      }
      {
       !loading &&  newloading && 
        <div>
              <Hearts
  height="80"
  width="80"
  color="red"
  ariaLabel="hearts-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
        </div>
      }
   
        </div>

    </div>
  )
}

export default Resource