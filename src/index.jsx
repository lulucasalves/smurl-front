import React from 'react'
import './styles/index.scss'
import reportWebVitals from './reportWebVitals'
import { AppRoutes } from './routes'
import { client } from './services/provider'
import { ApolloProvider } from '@apollo/client'
import { createRoot } from 'react-dom/client'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AppRoutes />
    </ApolloProvider>
  </React.StrictMode>
)

reportWebVitals()
