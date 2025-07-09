
import Whywe from './Whywe.jsx'
import Newsh from "./Newsh.jsx"
import CardsWrapper from './CardsWrapper.jsx'
import Ourstory from './Ourstory.jsx'
import Mission from './Mission.jsx'

const Wrapper = () => {
  return (
    <div className='flex flex-col p-8 items-center bg-linear-to-br from-[#16285B] to-[#121927]'>
       <Mission/>
        <Whywe/>
        <Newsh/>
        <CardsWrapper/>
        <Ourstory/>
    </div>
  )
}

export default Wrapper