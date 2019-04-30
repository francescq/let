class MarvelAPI {
  constructor (myAxios) {
    this.myAxios = myAxios
  }

  fetch (limit) {
    return this.myAxios.get(`/v1/public/characters?limit=${limit}`)
  }
}

export default MarvelAPI
