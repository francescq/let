import React from 'react'
import './SimonButton.scss'

export class SimonButton extends React.Component {
  sounds = {
    1: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
    2: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
    3: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
    4: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
  }

  button = React.createRef()

  isActive () {
    return this.props.play === this.props.active
  }

  removeFocus = () => {
    // console.log('removeFocus', this.props.className)
    this.button.current.className = this.props.className
  }

  render () {
    let { className, play, onClick } = this.props

    if (this.isActive()) {
      className += ' focus'
      this.timer = setTimeout(this.removeFocus(), 300)
      this.sounds[play].play()
    }
    // console.log('button render', className)
    return (
      <div
        play={play}
        ref={this.button}
        onClick={onClick}
        className={className}
      >
        Button
      </div>
    )
  }
}

export default SimonButton
