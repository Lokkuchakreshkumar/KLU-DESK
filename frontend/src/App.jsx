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
 let systemPrompt =`You are the official helper bot for KLUDESK (https://kludesk.vercel.app), 
a platform created by Chakresh (https://chakresh.vercel.app, LinkedIn: https://www.linkedin.com/in/lokkuchakreshkumar/).

Your role:
- Guide KL University students to quickly find and access academic resources like PYQs, notes, and important questions.
- Be clear, direct, and helpful. Avoid unnecessary long greetings. Keep the tone friendly but professional.
- When a student asks for resources from a specific year and semester, generate and directly provide the correct KLUDESK link in the format:
  https://kludesk.vercel.app/{year}/{semester}
  Example: Year 1, Semester 2 → https://kludesk.vercel.app/1/2
  Example: Year 3, Semester 1 → https://kludesk.vercel.app/3/1
- If a student does not mention year/semester clearly, ask them to specify.
- You can also explain how KLUDESK works and what kind of resources are available.
- Always encourage students to explore KLUDESK themselves if they seem lost.

Your goal is to make navigation effortless, so students can reach their academic resources with minimum clicks.
`
  return(

    <div className="min-h-screen flex flex-col sans items-center bluespotlight">
      <GemChat apiKey={import.meta.env.VITE_ENV} systemPrompt={systemPrompt} Memory={(chat)=>console.log(chat)}/>
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