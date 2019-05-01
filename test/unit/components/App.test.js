import React from 'react'
import { shallow } from 'enzyme'
import { App } from '../../../src/components/App'
import GameLayout from '../../../src/components/GameLayout'

let wrapper
let props
let items

describe('<App />', () => {
  beforeEach(() => {
    items = ['foo', 'bar']
    props = {
      loadItems: jest.fn()
    }
    wrapper = shallow(<App items={items} {...props} />)
  })
  it('should load the items on mount', () => {
    expect(props.loadItems).toHaveBeenCalledTimes(1)
  })

  describe('empty state', () => {
    beforeEach(() => {
      wrapper = shallow(<App items={[]} {...props} />)
    })
    it('should render loading when items are empty', () => {
      const loading = wrapper.find('[app-loading]')

      expect(loading.length).toEqual(1)
    })
  })

  describe('game state', () => {
    it('should render the game layout', () => {
      const game = wrapper.find(GameLayout)

      expect(game.length).toEqual(1)
    })
  })
})
