import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Home, Korzinka } from '../pages'



export const root = createBrowserRouter([
    {   
        path:"/",
        element:<Home/>
    },
    {   
        path:"/korzinka",
        element:<Korzinka/>
    },
])