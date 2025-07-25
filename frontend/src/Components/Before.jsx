import { FaArrowRight } from "react-icons/fa";
export default function Before(){
    return(
        <div className="flex flex-col  mt-8 w-[92%] sm:w-3/5 p-4 bg-[#050C1B] shadow-xl rounded-2xl shadow-black items-center justify-center">
        <div className="text-white text-center text-2xl font-bold">Start Your Academic Journey</div>
        <div className="text-white/50 text-center">Select your academic year and semester to discover tailored study materials and resources</div>
        <a href="#resource" className="bg-cyan-400 p-4 hover:shadow-xl hover:shadow-cyan-500/50  my-4   rounded-3xl">Get Started<FaArrowRight className="inline ml-4"/></a>
    
        </div>
      
    )
}