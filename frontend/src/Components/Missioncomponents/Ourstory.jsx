import React from 'react'

const Ourstory = () => {
  return (
    <div className='flex flex-col mt-12 sm:w-4/5 rounded-xl shadow-sm shadow-black p-8 bg-[#121212] items-center justify-center  border border-white/50'>
        <div className=' font-semibold bg-clip-text text-3xl text-transparent bg-linear-to-r from-amber-600 to-amber-500 '>
            Our Story
        </div>
        <div className='text-white py-4 text-center'> Born from the real struggles faced by KL University students, this platform was started by a group of friends who realized that getting important questions and the right study material early gives a clear edge.

What began as a mission to help peers has grown into a central hub used by thousands across departments, helping students prepare smarter, not harder.

</div>

<div className='mt-4 strict text-xl text-center text-sky-700'>Our goal is simple — no student should ever say, “I wish I had this earlier.”</div>
    </div>
  )
}

export default Ourstory
