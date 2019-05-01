import MarvelAPI from '../../../src/api/MarvelAPI'

let api
let axiosStub = {
  get: jest.fn(),
  create: jest.fn()
}

describe('MarvelAPI', () => {
  beforeEach(() => {
    axiosStub = {
      get: jest.fn(),
      create: jest.fn()
    }

    api = new MarvelAPI(axiosStub)
  })

  it('should get Marvel characters', () => {
    api.fetch('foo')

    expect(axiosStub.get).toHaveBeenCalledTimes(1)
    expect(axiosStub.get).toHaveBeenCalledWith(
      '/v1/public/characters?limit=foo'
    )
  })

  it('should get portraitMedium image', () => {
    api.get('url', 'extension')

    expect(axiosStub.get).toHaveBeenCalledTimes(1)
    expect(axiosStub.get).toHaveBeenCalledWith('url/portrait_medium.extension')
  })
})
