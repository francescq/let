import { validateReducer } from '../../../../src/store/reducers/validateReducer'
import { VALIDATE } from '../../../../src/store/actions/types'
import { GAME, DEFEAT, VICTORY } from '../../../../src/store/actions/gameStates'

describe('validateReducer', () => {
  it('should init to GAME', () => {
    const validateReduced = validateReducer(undefined, {
      type: 'foo'
    })

    expect(validateReduced).toEqual(GAME)
  })

  it('should return current validation on others', () => {
    const validateReduced = validateReducer(GAME, {
      type: 'foo'
    })

    expect(validateReduced).toEqual(GAME)
  })

  it('should return GAME', () => {
    const validateReduced = validateReducer('foo', {
      type: VALIDATE,
      payload: { game: [1], plays: [1], turn: 1 }
    })

    expect(validateReduced).toEqual(GAME)
  })
  it('should return DEFEAT', () => {
    const validateReduced = validateReducer('foo', {
      type: VALIDATE,
      payload: { game: [1], plays: [2], turn: 2 }
    })

    expect(validateReduced).toEqual(DEFEAT)
  })
  it('should return VICTORY', () => {
    const validateReduced = validateReducer('foo', {
      type: VALIDATE,
      payload: { game: [1], plays: [2], turn: 0 }
    })

    expect(validateReduced).toEqual(VICTORY)
  })
})
