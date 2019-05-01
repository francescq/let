import { playReducer } from '../../../../src/store/reducers/playReducer'
import { PLAY, RESTART } from '../../../../src/store/actions/types'

const previousPlay = [1, 2, 3]
describe('playReducer', () => {
  it('should init to []', () => {
    const playReduced = playReducer(undefined, { type: 'foo' })

    expect(playReduced).toEqual([])
  })

  it('should return current plays on other', () => {
    const playReduced = playReducer(previousPlay, { type: 'foo' })

    expect(playReduced).toEqual([1, 2, 3])
  })

  it('should return next play on PLAY', () => {
    const playReduced = playReducer(previousPlay, {
      type: PLAY,
      payload: ['foo']
    })

    expect(playReduced).toEqual(['foo'])
  })

  it('should return next play on RESTART', () => {
    const playReduced = playReducer(previousPlay, { type: RESTART })

    expect(playReduced).toEqual([])
  })
})
