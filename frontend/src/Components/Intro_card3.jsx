import { GiGraduateCap } from "react-icons/gi";
export default function Intro_card3(){
    return(
        <div className="flex justify-center border mt-4 rounded-3xl px-8 py-4 border-black bg-[#121212] items-center">
            <div><GiGraduateCap className="inine mr-2 text-amber-800 text-lg"/></div>
           <div className="flex ml-2 flex-col items-center">
            <div className="text-amber-600 font-semibold">All</div>
            <div className="text-white/50">Departments</div>
           </div>
        </div>
    )
}