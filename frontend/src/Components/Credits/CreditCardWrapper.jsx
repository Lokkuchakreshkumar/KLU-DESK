import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'

const CreditCardWrapper = () => {
  return (
    <div className='flex flex-wrap sm:mt-8 items-center justify-center'>
        <Card1/>
        <Card2/>
    </div>
  )
}

export default CreditCardWrapper