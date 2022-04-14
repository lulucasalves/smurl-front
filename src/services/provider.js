import { ApolloClient, InMemoryCache } from '@apollo/client'

const token = localStorage.getItem('token')

export const client = new ApolloClient({
  uri: 'http://localhost:4002',
  cache: new InMemoryCache(),
  headers: { authorization: token ? `Bearer ${token}` : '' }
})
