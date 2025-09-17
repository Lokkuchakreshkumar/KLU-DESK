
import { IoPeople } from "react-icons/io5";
const Community = () => {
  return (
     <div className="flex  sm:w-[20%] flex-col mt-4 items-center">
           <div className='flex w-[20%] sm:w-[30%] justify-center py-6 items-center bg-neutral-900 shadow-lg shadow-white/8 border border-white/30  rounded-xl  text-amber-400'>
           <IoPeople className='text-3xl'/>
           </div>
           <div className='text-white mt-4 text-xl  '>Community</div>
           <div className='text-white/40 text-center  mt-4'>Building a collaborative environment where students share knowledge and support each other's success.</div>
       </div>
  )
}

export default Community