import React from 'react'
import { shallow } from 'enzyme'
import { GameLayout } from '../../../src/components/GameLayout'

let state
describe('<GameLayout />', () => {
  beforeEach(() => {
    state = {
      restart: jest.fn()
    }
    shallow(<GameLayout {...state} />)
  })

  it('should reset the game after mount', () => {
    expect(state.restart).toHaveBeenCalledTimes(1)
  })
})
