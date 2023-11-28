import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout.jsx'
import Child1 from './Child1.jsx'
import Products from './Products.jsx'
import Product from './Product.jsx'
import { ProductsLoader } from './Products.jsx'
import { formAction } from './Contact.jsx'

import Help from './Help.jsx'
import Contact from './Contact.jsx'
const router = createBrowserRouter([
  {
    element: <RootLayout/>,
    path: '/',
    children : [{
      path: '/',
      element: <Child1/>
    }]
}, 
{
    element: <Products />,
    path: 'products',
    loader: ProductsLoader,
    id: 'products',
    children: [{
      path: ':id',
      element: <Product/>,
      loader: ProductsLoader
    }]
},
{
  element: <Help/>,
  path: 'help',
  children : [{
    element: <Contact/>,
    path: 'contact',
    action: formAction
  }]
}

])




ReactDOM.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
