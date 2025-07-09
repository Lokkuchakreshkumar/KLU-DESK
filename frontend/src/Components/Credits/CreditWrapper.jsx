import React from 'react'
import Recognition from './Recognition'
import Text from "./Text.jsx"
import CreditCardWrapper from './CreditCardWrapper.jsx'
import Join from './Join.jsx'
import Footer from './Footer.jsx'

const CreditWrapper = () => {
  return (
    <div className='flex flex-col items-center w-full bg-linear-to-br from-[#142140] to-[#121A28]'>
        <Recognition/>
        <Text/>
        <CreditCardWrapper/>
        <div className='text-white mt-24 sm:mb-4 text-4xl font-semibold'>Join us</div>
        <Join/>
        <Footer/>
    </div>
  )
}

export default CreditWrapper