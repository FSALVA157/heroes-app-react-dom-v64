import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./router/AppRouter";
import { AuthProvider } from './auth/context';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <div className="container">
      <RouterProvider router={router}  />
    </div>
    </AuthProvider>
  </React.StrictMode>,
)
