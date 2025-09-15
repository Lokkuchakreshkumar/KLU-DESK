import { GiCometSpark } from "react-icons/gi";
export default function Starter(){
    return(
    <div className="pt-16 flex mt-4 sm:w-1/3 justify-center w-full">
         <div className="py-4 flex justify-center text-black bg-[#FF6B00]  items-center sm:w-[30%] w-[90%] font-semibold rounded-4xl border border-[#ff0000]">
       <GiCometSpark className="inline text-[yellow] mr-4"/>    Built by  <a target="_blank" href="https://chakresh.vercel.app"  className="bg-neutral-900  underline p-1 text-amber-500 rounded-lg mx-2">student</a>, for students
        </div>
    </div>
    )
}