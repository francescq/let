import React from 'react'
import { shallow } from 'enzyme'
import SimonButton from '../../../src/components/SimonButton'

let wrapper
let props

describe('SimonButton', () => {
  beforeEach(() => {
    props = {
      avatar: {
        avatar: 'myAvatar',
        avatar_shiny: 'myShinyAvatar'
      },
      isActive: 0,
      play: 2,
      sounds: {
        1: { play: jest.fn() }
      },
      onClick: jest.fn(),
      className: 'styleClass'
    }
    wrapper = shallow(<SimonButton {...props} />)
  })

  it('should render the avatar img', () => {
    expect(wrapper.contains(<img src='myAvatar' />)).toEqual(true)
  })

  describe('focus', () => {
    beforeEach(() => {
      props.isActive = 1
      props.play = 1

      wrapper = shallow(<SimonButton {...props} />)
    })

    it('should render the shiny avatar', () => {
      expect(wrapper.contains(<img src='myShinyAvatar' />)).toEqual(true)
    })

    it('should play the sound', () => {
      expect(props.sounds[1].play).toHaveBeenCalledTimes(1)
    })

    it('should add focus class', () => {
      const style = wrapper.find('.focus')

      expect(style).toHaveLength(1)
    })
  })
})
