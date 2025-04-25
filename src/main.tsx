import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initializeEnvironment } from './lib/env'
import initNetworkGuard from './lib/network-guard'

// Initialize environment and security settings
initializeEnvironment().then(() => {
  // Initialize network guard to block unwanted network requests
  initNetworkGuard()
  
  // Render the application
  createRoot(document.getElementById("root")!).render(<App />)
})
