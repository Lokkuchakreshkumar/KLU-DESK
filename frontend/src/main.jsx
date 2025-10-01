import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Resource from './Components/Resource/Resource.jsx'
import { Analytics } from '@vercel/analytics/react';
import Unauthorized from './Components/Unauthorized.jsx'


import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import App from './App.jsx'
import Chat from './Components/Resource/Chat.jsx'

import Admin from './Components/admin.jsx'
let route = import.meta.env.VITE_SAFE_PATH;
 const router = createBrowserRouter([
  {path:'/',element:<App/>}, 
  {path:`/${route}`,element:<Admin/>},
  {path:`/:year/:semester`,element:<Resource/>},
  {path:`/chat/:id`,element:<Chat/>},
  {path:'/unauthorized',element:<Unauthorized/>}
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <Analytics/>
  </StrictMode>,
)
