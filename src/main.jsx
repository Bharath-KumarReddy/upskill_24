import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/cart_context.jsx'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(

    <CartProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </CartProvider>
  
)
