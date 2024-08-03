import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/input.css'
import './assets/index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import NotFoundPage from './Pages/components/NotFound.jsx';
import Index from './Pages/Index/Index.jsx';
import About from './Pages/About/About.jsx';
import Recipes from './Pages/Recipes/Recipes.jsx';
import Recipe from './Pages/Recipe/Recipe.jsx';
import LoginPage from './Pages/Login/LoginPage.jsx';
import RegisterPage from './Pages/Login/RegisterPage.jsx';

const router = createBrowserRouter([{
  path: '/',
  element: <Index/>,
  errorElement: <NotFoundPage/>
  },{
  path: '/shopping-list-web-app/',
  element: <Index/>,
  errorElement: <NotFoundPage/>
  },{
  path:'/shopping-list-web-app/about',
  element: <About/>,
  },{
  path:'/shopping-list-web-app/login',
  element: <LoginPage/>,
  },{
    path:'/shopping-list-web-app/register',
    element: <RegisterPage/>,
    },{
  path:'/shopping-list-web-app/lists',
  element: <NotFoundPage/>,
  },{
  path:'/shopping-list-web-app/recipes/',
  element: <Recipes/>,
  },{
    path: '/shopping-list-web-app/recipes/:recipeId',
    element: <Recipe/>,
  }]) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
