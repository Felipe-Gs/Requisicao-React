import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom';

import './index.css'
// paginas
import Home from './routes/Home';
import NewPost from './routes/NewPost';
import Emails from './routes/Emails';
import { AuthContextProvider } from './AuthContext/AuthContext';
import DataGithub from './routes/DataGithub';
import { Login } from './routes/Login';
import { Cadastro } from './routes/Cadastro';


const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Login/>
      },
      {
        path: '/Home',
        element: <Home/>
      },
      {
        path: '/new',
        element: <NewPost/>
      },
      {
        path: '/emails/:posicao?',
        element: <Emails/>
      },
      {
        path: '/dataGithub',
        element: <DataGithub/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/cadastro',
        element: <Cadastro/>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
   
  <React.StrictMode>
   <AuthContextProvider>
      <RouterProvider router={router}/>
   </AuthContextProvider>
  </React.StrictMode>
   
)
