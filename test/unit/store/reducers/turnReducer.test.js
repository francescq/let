import { turnReducer } from '../../../../src/store/reducers/turnReducer'
import { PLAY, RESTART, SET_TURN } from '../../../../src/store/actions/types'

describe('turnReducer', () => {
  it('should init to 5', () => {
    const turnReduced = turnReducer(undefined, { type: 'foo' })

    expect(turnReduced).toEqual(5)
  })

  it('should return current turn on others', () => {
    const turnReduced = turnReducer('currentTurn', { type: 'foo' })

    expect(turnReduced).toEqual('currentTurn')
  })

  it('should decrease turn by 1 on PLAY', () => {
    const turnReduced = turnReducer(10, { type: PLAY })

    expect(turnReduced).toEqual(9)
  })

  it('should restart turn to 5', () => {
    const turnReduced = turnReducer(10, { type: RESTART })

    expect(turnReduced).toEqual(5)
  })

  it('should set remaining turns', () => {
    const turnReduced = turnReducer('foo', {
      type: SET_TURN,
      payload: 'setTurn'
    })

    expect(turnReduced).toEqual('setTurn')
  })
})
