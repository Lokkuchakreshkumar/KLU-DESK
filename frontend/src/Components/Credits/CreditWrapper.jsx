import React from 'react'
import Recognition from './Recognition'
import Text from "./Text.jsx"
import CreditCardWrapper from './CreditCardWrapper.jsx'
import Footer from './Footer.jsx'
import demovideo from "../../assets/WhatsApp Video 2025-08-26 at 16.52.32_222f65c2.mp4"

const CreditWrapper = () => {
  return (
    <div className='flex flex-col items-center w-full bg-linear-to-br from-[#142140] to-[#121A28]'>
        <Recognition/>
        <Text/>
        <CreditCardWrapper/>
        
          <video src={demovideo} className="rounded-3xl w-[85%] sm:w-[45%]" muted autoPlay loop></video>
            
        <Footer/>
    </div>
  )
}

export default CreditWrapper