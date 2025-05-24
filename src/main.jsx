import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Router/Routes.jsx'
import { Toaster } from 'react-hot-toast'
import DarkProvider from './Provider/DarkProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <DarkProvider>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
       <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </AuthProvider>
    </DarkProvider>
    
  </StrictMode>,
)
