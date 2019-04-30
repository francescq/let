import axios from 'axios'

const BASE_URL = ' https://pokeapi.co'

export default axios.create({
  baseURL: BASE_URL
})
