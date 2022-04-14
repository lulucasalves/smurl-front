import { ApolloClient, InMemoryCache } from '@apollo/client'

const token = localStorage.getItem('token')

export const client = new ApolloClient({
  uri: 'https://smurl-lulucasalves.herokuapp.com',
  cache: new InMemoryCache(),
  headers: { authorization: token ? `Bearer ${token}` : '' }
})
