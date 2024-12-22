import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Root from './Route/Root.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Products from './components/Products.jsx';
const router=createBrowserRouter([
  {
    path:'/',
    element:<Root />,
    children:[
      {path:'/',element:<Home/>},
      {path:'/login',element:<Login/>},
      {path:'/pdt',element:<Products/>}
    ]
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/> 
  </StrictMode>,
)