import axios from 'axios'

const BASE_URL = 'https://gateway.marvel.com/'
const API_KEY = 'e62af0b3323d6f30793c93512026be29'

export default axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: API_KEY
  }
})
