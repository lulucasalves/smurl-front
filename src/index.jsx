import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import reportWebVitals from './reportWebVitals'
import { AppRoutes } from './routes'

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
