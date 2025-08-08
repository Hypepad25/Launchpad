import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'
import { removeHeroLogo } from './utils/removeHeroLogo'

// Kill any stray hero logos before render
removeHeroLogo();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
