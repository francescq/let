import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../../../src/components/Header'
import { GAME, DEFEAT, VICTORY } from '../../../src/store/actions/gameStates'

let wrapper
let props

describe('<Header />', () => {
  beforeEach(() => {
    props = {
      hero: { avatar: 'heroUrl' }
    }
    wrapper = shallow(<Header {...props} />)
    // console.log(wrapper.debug())
  })

  it('should render the Marvel Hero', () => {
    expect(wrapper.contains(<img src='heroUrl' />)).toBe(true)
  })

  describe('GAME state', () => {
    it('should render message on GAME state', () => {
      props.valid = GAME

      wrapper = shallow(<Header {...props} />)

      expect(
        wrapper.contains(<span>Can you help me with this plague?</span>)
      ).toBe(true)
    })

    it('should render message2 on GAME state', () => {
      props.valid = GAME
      props.turn = 2

      wrapper = shallow(<Header {...props} />)

      expect(wrapper.contains(<span>Just hold 2 more rounds</span>)).toBe(true)
    })

    it('should render message on DEFEAT state', () => {
      props.valid = DEFEAT

      wrapper = shallow(<Header {...props} />)

      expect(wrapper.contains(<span>Ough... they won :(</span>)).toBe(true)
    })

    it('should render message on VICTORY state', () => {
      props.valid = VICTORY

      wrapper = shallow(<Header {...props} />)

      expect(wrapper.contains(<span>You are the hero! You Won!</span>)).toBe(
        true
      )
    })
  })
})
