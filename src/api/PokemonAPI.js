class PokemonAPI {
  constructor (myAxios) {
    this.myAxios = myAxios
  }

  fetch (limit) {
    return this.myAxios.get(`/api/v2/pokemon?limit=${limit}`)
  }

  get (url) {
    return this.myAxios.get(url)
  }
}

export default PokemonAPI
