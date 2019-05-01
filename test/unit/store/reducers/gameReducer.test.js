import { gameReducer } from '../../../../src/store/reducers/gameReducer'
import { PLAY, RESTART } from '../../../../src/store/actions/types'
import sinon from 'sinon'
import RandomGenerator from '../../../../src/store/reducers/utils/RandomGenerator'

let randomStub
describe('gameReducer', () => {
  beforeEach(() => {
    randomStub = sinon
      .stub(RandomGenerator.prototype, 'random')
      .callsFake(() => {
        return 'random'
      })
  })

  afterEach(() => {
    randomStub.restore()
  })
  it('should init to empty', () => {
    const reduced = gameReducer(undefined, { type: 'foo' })

    expect(reduced).toEqual([])
  })

  it('should return current state if others', () => {
    const reduced = gameReducer([1, 2], { type: 'foo' })

    expect(reduced).toEqual([1, 2])
  })

  it('should generate next movement randomly', () => {
    const reduced = gameReducer([1, 2], { type: PLAY })

    expect(reduced).toEqual([1, 2, 'random'])
  })

  it('should restart the game with the random movement', () => {
    const reduced = gameReducer([1, 2], { type: RESTART })

    expect(reduced).toEqual(['random'])
  })
})
