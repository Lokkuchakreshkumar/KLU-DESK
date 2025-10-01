import { FaBookOpen } from "react-icons/fa6"; 
export default function New(){
    return(
    <div className="pt-16 flex mb-16 sm:w-1/3  mt-4 justify-center w-full">
         <div className="py-3 px2 flex justify-center  text-amber-400 bg-[orange]/50 items-center w-2/3 sm:w-[20%] font-semibold rounded-4xl border border-[orange]">
       <FaBookOpen className="inline text-[yellow] mr-4"/>    Resources selection
        </div>
    </div>
    )
}