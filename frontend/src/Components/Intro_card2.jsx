import { IoPeople } from "react-icons/io5";
export default function Intro_card2(){
    return(
        <div className="flex justify-center border mt-4 rounded-3xl px-8 py-4 border-black bg-[#060D1D] items-center">
            <div><IoPeople className="inine mr-2 text-cyan-300 text-lg"/></div>
           <div className="flex ml=2 flex-col items-center">
            <div className="text-white font-semibold">200+</div>
            <div className="text-white/50">Students</div>
           </div>
        </div>
    )
}