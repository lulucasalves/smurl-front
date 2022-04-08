import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import reportWebVitals from './reportWebVitals'
import { Logo } from './components/Logo'

ReactDOM.render(
  <React.StrictMode>
    <Logo />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
