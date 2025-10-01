
import Whywe from './Whywe.jsx'
import Newsh from "./Newsh.jsx"
import CardsWrapper from './CardsWrapper.jsx'
import Ourstory from './Ourstory.jsx'
import Mission from './Mission.jsx'

const Wrapper = () => {
  return (
    <div className='flex flex-col p-8 w-full items-center justify-center bg-black'>
       <Mission/>
        <Whywe/>
        <Newsh/>
        <CardsWrapper/>
        <Ourstory/>
    </div>
  )
}

export default Wrapper