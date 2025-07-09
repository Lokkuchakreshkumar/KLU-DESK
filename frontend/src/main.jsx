import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Resource from './Components/Resource/Resource.jsx'


import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import App from './App.jsx'

import Admin from './Components/admin.jsx'
 const router = createBrowserRouter([
  {path:'/',element:<App/>}, 
  {path:'/api/adminchakreshtrue',element:<Admin/>},
  {path:`/:year/:semester`,element:<Resource/>}
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
