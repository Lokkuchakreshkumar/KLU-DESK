import { GiCometSpark } from "react-icons/gi";
export default function Starter(){
    return(
    <div className="pt-20 flex mt-8 sm:w-1/3 justify-center w-full">
         <div className="p-2 text-amber-400 flex justify-center  bg-[orange]/10  items-center sm:w-[20%] w-[90%] font-semibold rounded-4xl border border-[orange]">
       <GiCometSpark className="inline text-[yellow] mr-4"/>    Built by  <a target="_blank" href="https://chakresh.vercel.app"  className="bg-neutral-900  underline p-1 text-amber-500 rounded-lg mx-2">student</a>, for students
        </div>
    </div>
    )
}