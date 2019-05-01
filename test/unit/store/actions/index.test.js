import { play, restart, setTurns } from '../../../../src/store/actions'
import { PLAY, RESTART, SET_TURN } from '../../../../src/store/actions/types'

describe('actions', () => {
  it('should dispatch PLAY', async () => {
    const action = play([1, 2, 3])

    expect(action).toEqual({ type: PLAY, payload: [1, 2, 3] })
  })

  it('should dispatch RESTART', async () => {
    const action = restart()

    expect(action).toEqual({ type: RESTART })
  })

  it('should dispatch SET_TURN', () => {
    const action = setTurns(1)

    expect(action).toEqual({ type: SET_TURN, payload: 1 })
  })
})
