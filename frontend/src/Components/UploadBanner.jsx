const UploadBanner = ()=>{
    return (
        <div className="flex flex-col justify-center outfit  items-center pt-20 w-full">
 <div className=" flex mt-8 sm:py-2 p-2 sm:w-[18%] gap-4 justify-center bg-green-400/10 backdrop-blur-2xl rounded-2xl border border-green-400 items-center "> 
      <div className="w-[10px] h-[10px] bg-green-600 animate-scale animate-pulse rounded-full"></div>
      <div className="text-green-600">
        New Resources uploaded
      </div>
 </div>
 <div className=" flex  mt-8 sm:py-2 p-2 sm:min-w-[20%] w-[90%] gap-4 justify-center bg-amber-400/10 backdrop-blur-2xl rounded-2xl border border-amber-400 items-center "> 
      <div className="w-[10px] h-[10px] bg-amber-600 animate-scale  p-1 animate-pulse rounded-full"></div>
      <div className="text-amber-600">
        We are Experiencing Server outages.Due to high traffic.We shifted to new servers But still we are Experiencing issues.We will fix soon.
      </div>
 </div>
 </div>
    )
}
export default UploadBanner;