import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Self-hosted Inter (variable font) — explicit .css path so Vite rebases the
// font file URLs and TypeScript accepts the import via vite/client types.
import '@fontsource-variable/inter/index.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
