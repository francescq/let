import React from 'react'
import './SimonButton.scss'

export class SimonButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isActive: props.isActive
    }
  }

  getFocusClass () {
    return this.props.className + ' focus'
  }

  playSound = () => {
    this.props.sounds[this.props.play].play()
  }

  onClick = e => {
    this.playSound()
    this.setState({ isActive: true })
    setTimeout(() => {
      this.setState({ isActive: false })
    }, 300)
    this.props.onClick(e)
  }

  render () {
    let { play, avatar } = this.props
    let clazz = this.props.className

    let myAvatar = avatar.avatar

    if (this.state.isActive) {
      this.playSound()
      clazz += this.getFocusClass()
      myAvatar = this.props.avatar.avatar_shiny
    }

    return (
      <div
        play={play}
        ref={this.button}
        onClick={this.onClick}
        className={clazz}
      >
        <img ref={this.avatar} src={myAvatar} />
      </div>
    )
  }
}

export default SimonButton
