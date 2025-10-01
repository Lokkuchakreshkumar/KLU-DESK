import apeksha from '../../public/Adobe Express - file (4).png'
export default function Navbar(){
    return(
        <div className="fixed shadow-xl/30  z-50 flex items-center justify-between strict text-3xl  backdrop-blur-sm  w-full h-16" >
      <span className=" text-white flex "><img src={apeksha}  className='sm:w-[5%] w-[20%]' alt="" /><span className="font-semibold text-lg sm:text-xl p-4 py-1">Apeksha X KLUDESK </span></span>
      <a href="#resource" className="text-white text-xl border inset-shadow-xl inset-shadow-black sm:mr-12 mr-4 border-white rounded-3xl p-3">Resources</a>
        </div>
    )
}