import React from 'react'
import './styles/index.scss'
import reportWebVitals from './reportWebVitals'
import { AppRoutes } from './routes'
import { client } from './services/provider'
import { ApolloProvider } from '@apollo/client'
import { createRoot } from 'react-dom/client'
import { Provider } from './store/Config'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <Provider>
      <ApolloProvider client={client}>
        <AppRoutes />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
