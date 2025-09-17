import React from 'react'
import Accessibilty from './Accessibilty'
import Community from './Community'
import Quality from './Quality'
import Innovation from './Innovation'
const CardsWrapper = () => {
  return (
    <div className='sm:flex sm:flex-row gap-x-6   justify-center items-center my-8'>
        <Accessibilty/>
        <Community/>
        <Quality/>
        <Innovation/>
    </div>
  )
}

export default CardsWrapper