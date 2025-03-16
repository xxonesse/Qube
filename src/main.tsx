import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StarsBackground from './components/Background.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StarsBackground />
    <App />
  </StrictMode>,
)
