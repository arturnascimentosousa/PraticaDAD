import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Teste } from "./components/Teste";
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Teste></Teste>
  </StrictMode>,
)
