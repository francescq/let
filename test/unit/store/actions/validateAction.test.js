/* eslint no-unused-vars: 0 */
import configureStore from 'redux-mock-store'
import { mockStore } from '../../../utils/mockStore'
import thunk from 'redux-thunk'
import { VALIDATE } from '../../../../src/store/actions/types'
import { validate } from '../../../../src/store/actions'

let store

describe('validate', () => {
  beforeEach(() => {
    const state = { turn: 5 }
    const mockStore = configureStore([thunk])
    store = mockStore(() => state)
  })

  it('should dispatch VALIDATE with current turn', async () => {
    store.dispatch(validate({ game: [1], play: [1] }))

    expect(store.getActions()[0]).toEqual({
      type: VALIDATE,
      payload: { game: [1], play: [1], turn: 5 }
    })
  })
})
