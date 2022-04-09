import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import reportWebVitals from './reportWebVitals'
import Home from './pages/home'
import Login from './pages/login'

ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
