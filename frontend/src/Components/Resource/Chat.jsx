
import { RiGeminiLine } from "react-icons/ri";
import { useParams } from 'react-router-dom';
import Main from "./main.jsx"


const Chat = () => {
    const {id} = useParams();
 
  
  return (
    <div className='min-h-screen bg-[#10182B]'>
           <div className="fixed shadow-xl/30  z-50 flex items-center justify-between strict text-3xl  backdrop-blur-sm  w-full h-16" >
              <span className=" text-white "><RiGeminiLine className="inline text-cyan-400 ml-4 drop-shadow-[0px_0px_15px_cyan]"/><span className="font-semibold text-lg sm:text-xl p-4 py-1">KLUE AI</span></span>
              <a href="/" className="text-white hover:bg-black hover:text-white text-xl border inset-shadow-xl inset-shadow-black sm:mr-12 mr-4 border-white rounded-3xl p-3">Resources</a>
                </div>
               
                <Main id ={id}/>

    </div>
  )
}

export default Chat