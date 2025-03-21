import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import StarsBackground from './components/Background.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/Qube'>
      <StarsBackground />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
