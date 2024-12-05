import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { root } from './root'
import './index.css'
import { ShopContext } from './context/save-cart-context'

createRoot(document.getElementById('root')).render(
    <ShopContext>
    <RouterProvider router={root}/>
    </ShopContext>

)
