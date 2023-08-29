import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'
import Login from './Login';
import Register from './register';
import Products from './Products';
import Admin from './Admin';
import CreateProductPage from './AddProduct';
 import ResetPassword from './resetPassword';
import Home from './Home.js';


const loader = () => {
  let token = localStorage.getItem("token");
    if(!token){
      return redirect("/login");
    }

    return null
  };


  const loginLoader=() =>{
    let token = localStorage.getItem("token");

    if(token){
      return redirect("/home");
    }
    return null;
  }


let browserRouter=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'login',
    element:<Login/>,
    loader: loginLoader
  },
  {
    path:'register',
    element: <Register/>
  },
  {
    path:'home',
    element:  <Admin/>,
    loader: loader,
    children: [
      {
        path: '',
        element: <Products/>
      },
      {
        path: 'products',
        element: <Products/>
      },
      {
       path:'add-product',
       element:<CreateProductPage/> 
      },
      {
        path:'reset-password',
        element: <ResetPassword/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={browserRouter}></RouterProvider>
  </React.StrictMode>,
)
