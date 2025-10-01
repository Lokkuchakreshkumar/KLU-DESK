import React from 'react'
import Recognition from './Recognition'
import Text from "./Text.jsx"
import CreditCardWrapper from './CreditCardWrapper.jsx'
import Footer from './Footer.jsx'


const CreditWrapper = () => {
  return (
    <div className='flex flex-col items-center w-full bg-black'>
        <Recognition/>
        <Text/>
        <CreditCardWrapper/>
        
          
            
        <Footer/>
    </div>
  )
}

export default CreditWrapper