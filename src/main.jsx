import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Home.jsx'
import { CounterProvider } from './RegistroTrabajador/Context.jsx'
import './index.css'
import './App.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <CounterProvider>
    <App />
  </CounterProvider>
  </React.StrictMode>,
)
