import React, { useEffect } from 'react'
import Login from './Login'
import {createBrowserRouter, useNavigate} from "react-router-dom"
import Browse from './Browse'
import {RouterProvider} from "react-router-dom"



const Body = () => {
    const AppRouter=createBrowserRouter([
     {
        path:"/",
        element:<Login/>
    },
                {
            path:"/browse",
            element:<Browse/>
            }


])

  return (
  <div>
    
<RouterProvider router={AppRouter} ></RouterProvider>

  </div>
  )
}

export default Body