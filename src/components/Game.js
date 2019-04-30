import React from 'react'
import SimonButton from './SimonButton'
import './Game.scss'

export class Game extends React.Component {
  state = { moves: [] }

  componentDidMount () {
    this.setState({ moves: this.props.game })

    if (this.props.game.length > 0) {
      this.showNextMove()
    }
  }

  popState = () => {
    const popMoves = this.state.moves.slice()
    popMoves.shift()
    this.setState({ moves: popMoves })
  }

  showNextMove = () => {
    let timer = setInterval(() => {
      this.popState()
      if (this.state.moves.length === 0) {
        clearInterval(timer)
      }
    }, 300)
  }

  getActiveButton = () => {
    return this.state.moves.slice()[0]
  }

  render () {
    const activeButton = this.getActiveButton()
    return (
      <div gane='game'>
        <div>Simon</div>
        <SimonButton
          play={1}
          onClick={this.props.play}
          active={activeButton}
          className='button green'
        />
        <SimonButton
          play={2}
          onClick={this.props.play}
          active={activeButton}
          className='button red'
        />
        <SimonButton
          play={3}
          onClick={this.props.play}
          active={activeButton}
          className='button yellow'
        />
        <SimonButton
          play={4}
          onClick={this.props.play}
          active={activeButton}
          className='button blue'
        />
      </div>
    )
  }
}

export default Game
