import React from "react";
import { RiGeminiLine } from "react-icons/ri";
import { FaLock } from "react-icons/fa6";
import axios from "axios";
import { useState } from "react";
import ReactMarkdown from "react-markdown"
const Main = ({ id }) => {
  let [input, setInput] = useState("");
      let RENDER_URI;
let env = "production"
if(env == "production"){
 RENDER_URI= import.meta.env.VITE_RENDER_URI
}
else{
  RENDER_URI = `http://localhost:8080`
}
  let [messages,setMessages] = useState([]);

  let handleInput = async (event) => {
    setInput(event.target.value);
  };

  let handleSubmit = async (event) => {
    setMessages((prev)=>[...prev,{sender:'user',text:input}])
    event.preventDefault();
    let data = await axios.post(
      `${RENDER_URI}/chat/${id}`,
      {
        query:input
      }
    );
      setInput('')
    console.log(data.data);
    setMessages((prev)=>[...prev,{sender:'ai',text:data.data}])
    console.log(input);
  
  };

  return (
    <div className="flex flex-col  w-full text-white">
        
        <div className="py-24 w-full   flex  flex-col">
             <div className="text-center m-4 text-xl">
                          <RiGeminiLine className="inline mr-2 text-amber-300 text-xl animate-slow"/>No Doubt is Dumb – Ask <span className="underline  text-cyan-500">KLUE AI</span>.
                        </div>
           {
            messages.map((el)=>(
            
                  <div className={`p-4 mb-12 m-4  ${el.sender==='user'?'bg-[#121212] self-end rounded-xl':'bg-[#1C1F33] text-[#E2E8F0] border  border-[#5B6EEC]/20 break-words max-w-[90%]  tracking-wide self-start mb-20 rounded-xl  '}`}><ReactMarkdown>{el.text}</ReactMarkdown></div>
        
            ))
           }
           
        </div>
      <div className=" fixed bottom-0 border border-white/50 bg-[#1e293b] rounded-lg mb-2 sm:left-24 sm:right-24 left-4 right-4  h-36 p-2   ">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center mt-4 ">
            <input
              type="text"
              className="border p-2 rounded-xl flex-grow ml-4 text-white resize-none w-[90%] mr-auto h-12"
              value={input}
              onChange={handleInput}
            />
            <button
              type="submit"
              className=" flex justify-center rounded-xl mr-1 ml-1 bg-linear-to-r from-sky-500 to-violet-600 items-center w-[14%] sm:w-[5%]"
            >
              <RiGeminiLine className="text-center text-xl" />
            </button>
          </div>
          <div className="text-white/50 text-center text-sm  py-2 ">
           <span><FaLock className="inline text-cyan-300   mb-1 "/></span>  No history. Just secure, real-time AI for clear concepts. Chat memory is limited due to no authentication.
          </div>
        </form>
      </div>
    </div>
  );
};

export default Main;
