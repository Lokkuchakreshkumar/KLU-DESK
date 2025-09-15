import Intro_card from "./Intro_card"
import Intro_card2 from "./Intro_card2"
import Intro_card3 from "./Intro_card3"
export default function Intro(){
    return(
        <div className="flex leading-relaxed tracking-wider w-full mt-8 flex-col items-center">
          <div className="text-center">
              <div className="text-3xl sm:text-6xl px-2   text-white font-bold">
                   Access KL University
            </div>
            <div className="text-3xl w-full px-2 items-center sm:text-5xl mt-1 text-amber-500  font-bold">
            Resources Instantly
            </div>
          </div>
            <div className="text-lg text-center mt-4 sm:mt-8 sm:px-24  text-[#9DA4AF]">
                Your comprehensive platform for academic resources, study materials, and collaborative learning. Join thousands of KL University students in their academic journey.
            </div>
           <div className="flex mt-4 gap-3 flex-wrap justify-center">
            <Intro_card/>
            <Intro_card2/>
            <Intro_card3/>
           </div>
        </div>
    )
}