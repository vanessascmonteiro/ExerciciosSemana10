import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext/ThemeContext.jsx'
import { AuthProvider } from './context/AuthContext/AUthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
)