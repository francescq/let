import React from 'react'
import SimonButton from './SimonButton'
import './Game.scss'

export class Game extends React.Component {
  state = { moves: [] }
  round = []

  componentDidMount () {
    this.setState({ moves: this.props.game })

    if (this.props.game.length > 0) {
      this.showNextMove()
    }
  }

  playRound = e => {
    this.round.push(parseInt(e.target.getAttribute('play')))

    if (this.round.length === this.props.game.length) {
      this.props.play(this.round)
    }
  }

  shiftMovement = () => {
    const popMoves = this.state.moves.slice()
    popMoves.shift()
    this.setState({ moves: popMoves })
  }

  showNextMove = () => {
    let timer = setInterval(() => {
      this.shiftMovement()
      if (this.state.moves.length === 0) {
        clearInterval(timer)
      }
    }, 1000)
  }

  getActiveButton = () => {
    return this.state.moves.slice()[0]
  }

  render () {
    // console.log(this.state.moves)
    const activeButton = this.getActiveButton()
    console.log(this.props)
    return (
      <div game='game' className='game'>
        <SimonButton
          play={1}
          onClick={this.playRound}
          active={activeButton}
          avatar={this.props.items[0][0]}
          className='button green'
        />
        <SimonButton
          play={2}
          onClick={this.playRound}
          active={activeButton}
          avatar={this.props.items[0][1]}
          className='button red'
        />
        <SimonButton
          play={3}
          onClick={this.playRound}
          active={activeButton}
          avatar={this.props.items[0][2]}
          className='button yellow'
        />
        <SimonButton
          play={4}
          onClick={this.playRound}
          active={activeButton}
          avatar={this.props.items[0][3]}
          className='button blue'
        />
      </div>
    )
  }
}

export default Game
