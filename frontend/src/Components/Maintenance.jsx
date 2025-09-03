import React from 'react'
import video from '../assets/Untitled video - Made with Clipchamp.mp4'

const Maintenance = () => {
  return (
    <div className='bg-black min-h-screen flex flex-col justify-center items-center'>
        <div className='text-white font-extrabold text-2xl text-center my-4'>KLUDESK is under Maintenance</div>
        <div className='text-white m-2 text-center'>
            Not downtime. Just me hand-coding pain into progress. Expect new madness soon.
        </div>
        <video className='sm:w-[40%] my-4 w-[90%]' src={video} autoPlay muted loop></video>

            <a  target='_blank' href="https://wa.me/918688913488?text=Hey%20Chakresh%2C%20we%20want%20to%20contribute%20to%20KLU%20DESK

" className='p-4 border border-white text-white rounded-lg hover:bg-cyan hover:text-black hover:bg-cyan-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50'>Talk to Developer</a>
    </div>
  )
}

export default Maintenance