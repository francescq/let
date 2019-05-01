import React from 'react'
import './Header.scss'

export class Header extends React.Component {
  render () {
    const { hero, valid, turn } = this.props

    const message = valid
      ? `Can you help me with this plague?`
      : 'Ough... they won :('

    const message2 = valid ? `Just hold ${turn} more rounds` : ''

    return (
      <div className='header'>
        <img src={hero.avatar} />
        <div className='message'>
          <span>{message}</span>
          <span>{message2}</span>
        </div>
      </div>
    )
  }
}

export default Header
