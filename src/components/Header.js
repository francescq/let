import React from 'react'
import './Header.scss'

export class Header extends React.Component {
  render () {
    const { hero, valid } = this.props

    const message = valid
      ? 'Can you help me with this plague?'
      : 'Ough... they won :('
    return (
      <div className='header'>
        <img src={hero.avatar} />
        <span className='message'>{message}</span>
      </div>
    )
  }
}

export default Header
