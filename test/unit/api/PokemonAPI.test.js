import PokemonAPI from '../../../src/api/PokemonAPI'

let api
let axiosStub = {
  get: jest.fn(),
  create: jest.fn()
}

describe('PokemonAPI', () => {
  beforeEach(() => {
    axiosStub = {
      get: jest.fn(),
      create: jest.fn()
    }

    api = new PokemonAPI(axiosStub)
  })

  it('should fetch pokemons', () => {
    api.fetch('foo')

    expect(axiosStub.get).toHaveBeenCalledTimes(1)
    expect(axiosStub.get).toHaveBeenCalledWith('/api/v2/pokemon?limit=foo')
  })

  it('should get the given url', () => {
    api.get('url')

    expect(axiosStub.get).toHaveBeenCalledTimes(1)
    expect(axiosStub.get).toHaveBeenCalledWith('url')
  })
})
