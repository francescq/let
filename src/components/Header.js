import React from 'react'
import { connect } from 'react-redux'
import './Header.scss'
import { GAME, DEFEAT, VICTORY } from '../store/actions/gameStates'

export class Header extends React.Component {
  getMessage1 = () => {
    switch (this.props.valid) {
      case GAME:
        return 'Can you help me with this plague?'
      case DEFEAT:
        return 'Ough... they won :('
      case VICTORY:
        return 'You are the hero! You Won!'
    }
  }

  getMessage2 () {
    switch (this.props.valid) {
      case GAME:
        return `Just hold ${this.props.turn} more rounds`
      default:
        return ''
    }
  }

  render () {
    const { hero } = this.props

    return (
      <div className='header'>
        <img src={hero.avatar} />
        <div className='message'>
          <span>{this.getMessage1()}</span>
          <span>{this.getMessage2()}</span>
        </div>
      </div>
    )
  }
}

const map = state => {
  return {
    hero: state.items[1][0],
    turn: state.turn,
    valid: state.valid
  }
}

export default connect(
  map,
  null
)(Header)
