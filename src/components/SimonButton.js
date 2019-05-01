import React from 'react'
import './SimonButton.scss'

export class SimonButton extends React.Component {
  button = React.createRef()
  avatar = React.createRef()

  sounds = {
    1: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
    2: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
    3: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
    4: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
  }

  isActive = () => {
    console.log(this.props.play, this.props.active)
    return this.props.play === this.props.active
  }

  removeFocus = () => {
    this.button.current.className = this.props.className
    this.avatar.current.src = this.props.avatar.avatar
  }

  getFocusClass () {
    return this.props.className + ' focus'
  }

  setFocus = () => {
    this.sounds[this.props.play].play()
    this.button.current.className = this.getFocusClass()
    this.avatar.current.src = this.props.avatar.avatar_shiny
  }

  onClick = e => {
    this.sounds[this.props.play].play()
    this.setFocus()
    setTimeout(this.removeFocus, 300)
    this.props.onClick(e)
  }

  render () {
    let { play, avatar } = this.props
    let clazz = this.props.className

    let myAvatar = avatar.avatar
    if (this.isActive()) {
      clazz = this.getFocusClass()
      myAvatar = avatar.avatar_shiny
      this.sounds[this.props.play].play()
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
