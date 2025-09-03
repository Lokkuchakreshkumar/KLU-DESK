import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Resource from './Components/Resource/Resource.jsx'
import Maintenance from './Components/Maintenance.jsx'


import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import App from './App.jsx'
import Chat from './Components/Resource/Chat.jsx'

import Admin from './Components/admin.jsx'
 const router = createBrowserRouter([
  {path:'/',element:<App/>}, 
  {path:'/adminchakreshtrue',element:<Admin/>},
  {path:`/:year/:semester`,element:<Resource/>},
  {path:`/chat/:id`,element:<Chat/>}
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
