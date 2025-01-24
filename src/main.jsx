import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('__root__custom_react_app__')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
