import { FaBookOpen } from "react-icons/fa6"; 
export default function Intro_card(){
    return(
        <div className="flex justify-center border mt-4 rounded-3xl px-8 py-4 border-black bg-[#060D1D] items-center">
            <div><FaBookOpen className="inine mr-2 text-cyan-300 text-lg"/></div>
           <div className="flex ml=2 flex-col items-center">
            <div className="text-white font-semibold">250+</div>
            <div className="text-white/50">Resources</div>
           </div>
        </div>
    )
}