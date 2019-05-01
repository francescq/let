class MarvelAPI {
  constructor (myAxios) {
    this.myAxios = myAxios
  }

  fetch (limit) {
    return this.myAxios.get(`/v1/public/characters?limit=${limit}`)
  }

  get (url, extension) {
    return this.myAxios.get(url + '/portrait_medium.' + extension)
  }
}

export default MarvelAPI
