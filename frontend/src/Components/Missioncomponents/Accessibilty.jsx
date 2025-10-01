
import { FiTarget } from "react-icons/fi";

const Accessibilty = () => {
  return (
    <div className="flex sm:w-[20%]  flex-col mt-4  items-center justify-center">
        <div className='flex w-[20%] sm:w-[30%] justify-center py-6 shadow-lg shadow-white/8 items-center bg-neutral-900 border border-white/30  rounded-xl  text-amber-400'>
        <FiTarget className='text-3xl'/>
        </div>
        <div className='text-white mt-4 text-xl  '>Accessibility</div>
        <div className='text-white/40 text-center mt-4'>Making quality educational resources available to every student, breaking down barriers to learning.</div>
    </div>
  )
}

export default Accessibilty