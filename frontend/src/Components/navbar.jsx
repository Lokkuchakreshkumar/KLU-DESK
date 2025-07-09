import { SiStudyverse } from "react-icons/si";
export default function Navbar(){
    return(
        <div className="fixed shadow-xl/30  z-50 flex items-center justify-between strict text-3xl  backdrop-blur-sm  w-full h-16" >
      <span className=" text-white "><SiStudyverse className="inline text-cyan-400 ml-4 drop-shadow-[0px_0px_15px_cyan]"/><span className="font-semibold text-lg sm:text-xl p-4 py-1">KLU DESK</span></span>
      <a href="#resource" className="text-white text-xl border inset-shadow-xl inset-shadow-black sm:hidden mr-4 border-white rounded-3xl p-3">Resources</a>
        </div>
    )
}