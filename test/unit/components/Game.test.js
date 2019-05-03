import React from 'react'
import { shallow } from 'enzyme'

import { Game } from '../../../src/components/Game'
import { SimonButton } from '../../../src/components/SimonButton'

let wrapper
let props
describe('<Game />', () => {
  beforeEach(() => {
    props = {
      items: [['avatar']],
      game: [1, 2, 3]
    }

    wrapper = shallow(<Game {...props} />)
  })

  it('should init button to active', () => {
    const buttons = wrapper.find(SimonButton)

    expect(buttons).toHaveLength(4)
  })

  it('button 1 should be active', () => {
    const buttons = wrapper.find(SimonButton)

    expect(buttons.at(0).props().isActive).toEqual(true)
    expect(buttons.at(1).props().isActive).toEqual(false)
    expect(buttons.at(2).props().isActive).toEqual(false)
    expect(buttons.at(3).props().isActive).toEqual(false)
  })
})
