import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://smurl.herokuapp.com/'
})