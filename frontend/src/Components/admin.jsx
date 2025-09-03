
import { useState } from 'react'
import axios from "axios"

const Admin = () => {
    let RENDER_URI;
let env = "production"
if(env == "production"){
 RENDER_URI= import.meta.env.VITE_RENDER_URI
}
else{
  RENDER_URI = `http://localhost:8080`
}
   let [formsubmit,setformsubmit] = useState('')
    let [input,setInput] = useState({
        title:'',
        subject:'',
        year:1,
        semester:1,
        url:'',
        type:'',
    });
    
     

    
    let handleInput = async (event)=>{
        let field = event.target.name;
        let value = event.target.value;
        setInput((prev)=>({
            ...prev,
            [field]:value

        }))
    }
    let handleSubmit = async  (event)=>{
        event.preventDefault();
        console.log(input)
        try{
             let data = await axios.post(`${RENDER_URI}/${import.meta.env.VITE_SAFE_PATH}`,{
        input:input
      })
      console.log(data.data)
      setformsubmit('form submitted')
      setTimeout(()=>{
        setformsubmit('')
      },3000)
        }catch(err){
            console.log(err)

        }
    setInput({title:'',
    subject:'',
    year:1,
    semester:1,
    url:'',
    type:'',}

        )
    }
  return (
    <div>
        <p className='text-red-500 font-bold p-4'>Submitting will trigger Changes in db directly as you have admin privileges</p>
       <form onSubmit={handleSubmit} className='flex flex-col    p-4 space-y-5' >
             <input type="text" onChange={handleInput}  name='title' value={input.title}   placeholder='enter title' required className='h-16 p-4 border border-black' />
             <input type="text" onChange={handleInput}  name='subject' value={input.subject}   placeholder='enter subject name' required  className='h-16 p-4 border border-black'/>
             <input type="number" min={1} max={4} onChange={handleInput}  name='year' value={input.year}   placeholder='year' required  className='h-16 p-4 border border-black'/>
             <input type="number" min={1} max={2} onChange={handleInput}  name='semester' value={input.semester}   placeholder='semester' required   className='h-16 p-4 border border-black'/>
             <input type="text"  onChange={handleInput}   placeholder='enter url of drive link'value={input.url} name='url' required className='h-16 p-4 border border-black' />
             <input type="text"  onChange={handleInput} value={input.type}  name='type'  placeholder='enter type ex:before_exam,pyq,notes,etc' className='h-16 p-4 border border-black' />
             <button type="submit" className='p-4 bg-green-600 text-white'>Submit</button>
        </form> 
    
 {formsubmit && <p className='p-4 bg-green-500 text-white font-bold'>form submitted</p>}
    
    </div>
    
  )
}

export default Admin