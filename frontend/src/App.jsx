import Intro from "./Components/Intro.jsx"
import Navbar from "./Components/navbar.jsx"
import Starter from "./Components/starter.jsx"
import Before from "./Components/Before.jsx"
import New from "./Components/New.jsx"
import Mainpage from "./Components/Mainpage.jsx"
import GemChat from 'gchat'
import Wrapper from "./Components/Missioncomponents/Wrapper.jsx"
import CreditWrapper from "./Components/Credits/CreditWrapper.jsx"



export default function App(){
 
  return(

    <div className="min-h-screen flex flex-col sans items-center bluespotlight">
      <GemChat apiKey={" AIzaSyBi6aMCpB4IYlAUCyf0QSfYOVMqYpJkKqE"} Memory={(chat)=>console.log(chat)}/>
        <Navbar/>
       <Starter/>
       <Intro/>
       <Before/>
        <New/>
        <Mainpage/>
    
        <Wrapper/>

        <CreditWrapper/>
       
      
       
    </div>
  )
}