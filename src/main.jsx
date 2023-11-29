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
import Login from './Login.jsx'
import Help from './Help.jsx'
import Contact from './Contact.jsx'
import SensitiveData from './SensitiveData.jsx'
import { ProtectedLoader } from './ProtectedLoader.jsx'
import ProtectedRoutes from './ProtectedRoutes.jsx'
import ExtraSensitive from './ExtraSensitive.jsx'
import SignUp from './SignUp.jsx'
import { AccessFormData } from './SignUp.jsx'
import {storage, firebaseApp} from './firebaseConfig'

/*
  Should ProtectedLoader be on the parent or child element?

  Pros/cons:
  Parent element can protect children without needing multiple loaders.

  Cons: 
  Cannot have a rendered Header/Footer?? Cannot have pages where authentication is not required ?
*/

const router = createBrowserRouter([
  {
    element: <RootLayout/>,
    path: '/',
    loader: ProtectedLoader,
    children : [{
      path: '/profile',
      element: <SensitiveData/>
    }]
}, {
    element: <ProtectedRoutes>
      <SensitiveData/>
    </ProtectedRoutes>,
    path: 'details', 
    children: [{
      element: <ExtraSensitive/>,
      path: 'secret'
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
},
{
  element: <Login/>,
  path: 'login'
},
{
  element: <SignUp/>,
  path: 'signup',
  action: AccessFormData
}

])




ReactDOM.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
