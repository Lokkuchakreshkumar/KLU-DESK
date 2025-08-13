import { AiFillThunderbolt } from "react-icons/ai";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";


import { useNavigate } from "react-router-dom";

export default function Mainpage(){
    const navigate = useNavigate();
    let [year,setYear] = useState(1)
    let [semester,setSemester] = useState(1)
    let handleSubmit = (event)=>{
        event.preventDefault()
        console.log(year,semester)
        navigate(`/${year}/${semester}`)
    }
    let handleYear = (event) =>{
        setYear(event.target.value)
    }
      let handleSemester = (event) =>{
        setSemester(event.target.value)

    }
return (
    <section id="resource" className="flex flex-col items-center ">
        <div className="w-[75%] flex flex-col items-center justify-center p-8"> 
         <a className="bg-green-500 strict text-2xl w-[80%] hover:bg-green-600  items-center  transition hover:text-black flex justify-center p-4  rounded-xl hover:scale-105" href="https://chat.whatsapp.com/I5HGsdRu3D2Iz50D7ChPAA"><FaWhatsapp className="inline mr-2 text-black"/>Join Y25 Group</a>
        </div>
        <div className="text-3xl text-white text-center font-extrabold">Find Your Resources</div>
        <div className="text-xl text-white/40 mt-4 text-center font-semibold">Choose your academic details to access curated study materials and resources</div>
        <form  onSubmit={()=>handleSubmit(event)}  className="w-[85%] rounded-2xl border border-white mb-16 mt-8 p-16 bg-[#050C1A] flex flex-col">
            <label htmlFor="year" className="text-white font-bold">academic year</label>
         <select name="year" id="year" value={year} onChange={()=>handleYear(event)} required className="border  text-white  border-white rounded-xl h-10">
            <option value="1" className="text-black">1</option>
            <option value="2" className="text-black">2</option>
            <option value="3" className="text-black">3</option>
            <option value="4" className="text-black">4</option>
         </select>
         <label htmlFor="semester"  className="text-white mt-4 font-bold"> semester</label>
            <select name="semester" required id="semester" value={semester} onChange={()=>handleSemester(event)} className="border text-white  border-white rounded-xl h-10">
            <option value="1" className="text-black">1</option>
            <option value="2" className="text-black">2</option>
         </select>
         <button className="w-full p-4 hover:cursor-pointer hover: rounded-xl mt-8 bg-transparent text-white border border-cyan-500 hover:bg-cyan-500 hover:text-black"><AiFillThunderbolt className="inline mr-4"/>Show resources</button>
        </form>

    </section>
)
}