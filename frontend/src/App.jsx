import Intro from "./Components/Intro.jsx"
import Navbar from "./Components/navbar.jsx"
import New from "./Components/New.jsx"
import Mainpage from "./Components/Mainpage.jsx"
import GemChat from 'gchat'
import { RxCross2 } from "react-icons/rx";
import Join from './Components/Credits/Join.jsx'
import Wrapper from "./Components/Missioncomponents/Wrapper.jsx"
import CreditWrapper from "./Components/Credits/CreditWrapper.jsx"
import UploadBanner from "./Components/UploadBanner.jsx"
import { Helmet } from "react-helmet-async"
import { useState } from "react"
import { IoSendSharp } from "react-icons/io5";
import Loader from "./Components/Loader.jsx"
import axios from 'axios'




export default function App(){
      let RENDER_URI;
let env = "production";
if(env == "production"){
 RENDER_URI= import.meta.env.VITE_RENDER_URI
}
else{
  RENDER_URI = `http://localhost:8080`
}
  let [input,setInput] = useState('');
  let [width,setWidth] = useState(false);
  let [button,showButton] = useState(false)
  let [loading,setLoading] = useState(false);
   let [reply,setReply] = useState("")
  let widthControl = (e)=>{
     setInput(e.target.value);
    if(e.target.value===''){
      setWidth(false)
      showButton(false)
    }else{
      setWidth(true);
      showButton(true);
    }
  }
  let handleSubmit = async(e)=>{
    e.preventDefault()
    setLoading(true);
    console.log('this is url:'+`${RENDER_URI}/uniSearch`)
    let data = await axios.post(`${RENDER_URI}/uniSearch`,{input});
    console.log(data.data.reply);
    setReply(data.data.reply)
    setLoading(false)

  }
  let handleCancel = ()=>{
    setInput('');
    setReply('');
    setWidth(false);
}
 let systemPrompt =`You are the built-in helper bot for KLED ,which is latestly collaborated with Apeksha now it is Apeksha X KLUDESK. Students are already using the KLUDESK website, so never tell them to visit it again.
Instead, your job is to guide them through the site and explain how to use it effectively.

Core instructions:
- KLED provides academic resources (PYQs, notes, important questions) for all years and semesters.
- If a student specifies their academic year and semester, respond with the direct link in this format:
  https://kled.vercel.app/{year}/{semester}
  Example: Year 1, Semester 2 → https://kled.vercel.app/1/2
  Example: Year 3, Semester 1 → https://kled.vercel.app/3/1
- If they don’t specify year/semester clearly, ask them politely to provide it.
- You can also help with any general questions related to any educational subject or any general questions about Apeksha X KLED
- If someone asks how to contribute, tell them about the **Contribute** button on the website.
  Explain that contributors get their name featured on KLED and can also join the WhatsApp group here:
  https://chat.whatsapp.com/GSfZoEOlE809OSQFQj2j0c?mode=r_t
- If someone asks “Who made KLED?” → answer:
  “KLED was made by Chakresh(https://chakresh.vercel.app), a student at KL University.”
- Do not bring up the creator’s name unless directly asked.
- Keep answers simple, clear, and friendly. Don’t over-explain.
- Your main goal is to make it fast and easy for students to get their academic resources or guidance.
`
  return(

    <div className="min-h-screen transition-all duration-500 flex flex-col sans items-center newbg">
      <Helmet>
        <title>Kled - Your Ultimate Academic Resource Hub by Chakresh</title>
        <meta name="description" content="Discover Kled, the comprehensive academic platform for KL University students, founded by student-innovator Chakresh. Kled offers a vast library of previous year question papers, detailed notes, and crucial questions for every year and semester. A collaborative initiative with Apeksha, Kled is designed to streamline your studies and academic success." />
      </Helmet>
      {/* <GemChat apiKey={import.meta.env.VITE_ENV} systemPrompt={systemPrompt} Memory={(chat)=>console.log(chat)}/> */}
          <div className={`w-[10%] z-[999] flex flex-col  border-y border-white/25 p-0 transition-all duration-700 rounded-xl  fixed bottom-5 ${width?'sm:!w-[50%] w-[95%]':'sm:!w-[25%] w-[80%]'} ${reply.trim()!=""?'bg-[#212121] ':'bg-white/8 backdrop-blur-xl'}`}>
        
            {
            reply.trim()!="" && <div className="ml-auto m-2  "> <div onClick={handleCancel} className="p-2 hover:cursor-pointer text-white hover:inset-shadow-sm hover:inset-shadow-black rounded-xl hover:bg-white hover:text-black bg-black"><RxCross2 /></div>  </div>
          }
      
  <div className={`
    transition-all flex justify-center duration-700 overflow-y-auto 
    ${reply.trim() !== "" ? "max-h-[600px]  z-[999] my-2 px-3 opacity-100" : "max-h-100 opacity-100"}
  `}
>
  {loading && <div className="flex flex-col items-center justify-center">
       <Loader/> 
    </div>}
 {
  !loading &&  <div dangerouslySetInnerHTML={{__html:reply}} className="text-white text-sm">
   
  </div>
 }
</div>

          <form onSubmit={handleSubmit} action="" className="h-full flex px-2 items-center">
            <input value={input} onChange={widthControl} type="text" placeholder="Ask SynkAI agent" className={` placeholder:text-white/50 rounded-xl py-3 px-2 text-white text-center outline-none h-full w-full  ${reply.trim()!=""?'border-y my-2 border-white/25 ':''}`} />
            {
              button && !loading && <div onClick={handleSubmit} className={` backdrop-blur-xl bg-blue-400 transition-all duration-1500 flex justify-center items-center p-2 hover:cursor-pointer  ml-2 mr-1 rounded-xl`}>{!loading && <IoSendSharp className="inline"/> } </div> 
              
            }
          </form>
        </div>
        <Navbar/>


       <UploadBanner/>

       <Intro/>
<Join/>
        <New/>
        <Mainpage/>

        <Wrapper/>

        <CreditWrapper/>



    </div>
  )
}
