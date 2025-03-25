import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Provider from './app/Provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider />
  </StrictMode>,
)
