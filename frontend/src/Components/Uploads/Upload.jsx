import React, { useRef, useState } from 'react'
import axios from 'axios';
import { FaFilePdf } from "react-icons/fa6";
import { RotatingLines } from 'react-loader-spinner'

const Upload = () => {
  let [link, setLink] = useState("");
  let [loading, setLoading] = useState(false);
  let [title, setTitle] = useState('');
  let [subject, setSubject] = useState('');
  let [year, setYear] = useState('');
  let [semester, setSemester] = useState('');
  let [type,setType] = useState('pyq');
  let RENDER_URI;
  let env = "dev";
  if (env == "production") {
    RENDER_URI = import.meta.env.VITE_RENDER_URI
  }
  else {
    RENDER_URI = `http://localhost:8080`
  }
  let handleTitle = (e) => {
    setTitle(e.target.value)
  }
  let handleSubject = (e) => {
    setSubject(e.target.value);
  }
  let handleYear = (e)=>{
    setYear(e.target.value)
  }
  let handleSemester = (e)=>{
    setSemester(e.target.value);
}
   let handleType = (e)=>{
    setType(e.target.value)
   }
  const [fname, setFname] = useState("");
  const [file, setFile] = useState(null);
  const fileRef = useRef();
  let handleFileClick = () => {
    fileRef.current.click();
  }

  let handleChange = (e) => {
    const file = e.target.files[0];
    if (file.type != "application/pdf") {
      alert("only pdf's allowed");
      return;
    }
    setFile(file);
    console.log(file);
    setFname(file.name)



  }
  let handlePost = async () => {
    try {
      if (!file){
        alert('file required')
        return;
      };
      const fd = new FormData();
      fd.append("pdf", file);
      setLoading(true);
      const res = await axios.post(`${RENDER_URI}/upload`, fd);
      console.log(res.data.url);
      setLink(res.data.link);
      let input = {
        title:title,
        subject:subject,
        year:year,
        semester:semester,
        url:res.data.url,
        type:type,
        


      }
      console.log(input);
      let response = await axios.post(`${RENDER_URI}/create`,{input:input})
      console.log(response)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false);
      alert('some error occured')
    }

  }


  return (
    <div className='bg-black flex p-4 flex-col items-center w-full   min-h-screen text-white'>


      <form action="" className='border border-white/25 px-24 rounded-lg  w-[35%] flex flex-col py-4'>
        <div className='flex flex-col py-1 w-full'>
          <label className='py-2' htmlFor="">Title</label>
          <input onChange={handleTitle} value={title} type="text" className='outline-none p-2 border border-white/50 rounded-md' placeholder='Ex: Questions for Data Structures' />
        </div>
        <div className='flex flex-col py-1 w-full'>
          <label className='py-2' htmlFor="">Subject</label>
          <input onChange={handleSubject} value={subject} type="text" className='outline-none p-2 border border-white/50 rounded-md' placeholder='Ex: Data Structures' />
        </div>
        <div className='flex flex-col py-1 w-full'>
          <label className='py-2' htmlFor="">Year</label>
          <input type="number" onChange={handleYear} value={year}  min={1} max={4} className='outline-none p-2 border border-white/50 rounded-md' placeholder='1' />
        </div>
        <div className='flex flex-col py-1 w-full'>
          <label className='py-2' htmlFor="">Semester</label>
          <input onChange={handleSemester} value={semester}  type="number" max={2} min={1} className='outline-none p-2 border border-white/50 rounded-md' placeholder='2' />
        </div>
        <div className='flex flex-col py-1 w-full'>
          <label className='py-2' htmlFor="">Type</label>
          <select onChange={handleType} value={type}  className='bg-black text-white outline-none border border-white/50 p-2 rounded-md'>
            <option value="before_exam" className='bg-black text-white'>before_exam</option>
            <option value="pyq" className='bg-black text-white'>pyq</option>
            <option value="notes" className='bg-black text-white'>notes</option>
            <option value="IMP Questions" className='bg-black text-white'>IMP Questions</option>
          </select>
        </div>
        <div className='my-4'>
          <div onClick={handleFileClick} className='p-2 border flex flex-col items-center gap-4 border-white/30 rounded-md hover:scale-105 hover:cursor-pointer'>
            {fname == "" && <div className='flex flex-col items-center gap-4'><FaFilePdf className='text-4xl' /> <span>Upload by clicking</span></div>}{fname != "" &&
              <div className='flex flex-col items-center'><div>{fname}</div><div className='text-white/50 mt-2'>Click again to change selection</div></div>
            }
          </div>

        </div>
          <div onClick={handlePost} className=' p-2 hover:scale-98 rounded-md bg-white inset-shadow-sm inset-shadow-indigo-500/60 flex justify-center font-extrabold text-black  py-1 border m-4 hover:cursor-pointer'>
        {!loading && <div>Post</div>}
        {loading && 
        <RotatingLines
visible={true}
height="96"
width="56"
color="grey"
strokeWidth="5"
animationDuration="0.75"
ariaLabel="rotating-lines-loading"
wrapperStyle={{}}
wrapperClass=""
/>
        }
      </div>
      </form>


    
      <form className='hidden' action="">
        <input type="file"
          onChange={handleChange}
          ref={fileRef} />
      </form>
    </div>
  )
}

export default Upload
