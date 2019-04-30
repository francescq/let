import React from 'react'
import SimonButton from './SimonButton'
import './Game.scss'

export class Game extends React.Component {
  state = { moves: [] }

  componentDidMount () {
    this.setState({ moves: this.props.game })
  }

  playNextMove = () => {}

  getActiveButton = () => {
    console.log(this)
    return this.state.moves.slice().pop()
  }

  render () {
    console.log(this.props)
    const activeButton = this.getActiveButton()
    return (
      <div gane='game'>
        <div>Simon</div>
        <SimonButton
          play='2'
          onClick={this.props.play}
          active={activeButton}
          className='button green'
        />
        <SimonButton
          play='2'
          onClick={this.props.play}
          active={activeButton}
          className='button red'
        />
        <SimonButton
          play='3'
          onClick={this.props.play}
          active={activeButton}
          className='button yellow'
        />
        <SimonButton
          play='4'
          onClick={this.props.play}
          active={activeButton}
          className='button blue'
        />
      </div>
    )
  }
}

export default Game
