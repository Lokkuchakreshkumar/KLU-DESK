import React from 'react'
import Accessibilty from './Accessibilty'
import Community from './Community'
import Quality from './Quality'
import Innovation from './Innovation'
const CardsWrapper = () => {
  return (
    <div className='flex flex-wrap space-x-0 items-center justify-center mt-8'>
        <Accessibilty/>
        <Community/>
        <Quality/>
        <Innovation/>
    </div>
  )
}

export default CardsWrapper