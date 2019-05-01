import React from 'react'
import SimonButton from './SimonButton'
import { connect } from 'react-redux'
import { validate, play } from '../store/actions'
import './Game.scss'

export class Game extends React.Component {
  state = { moves: [] }
  round = []
  sounds = {
    1: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
    2: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
    3: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
    4: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
  }

  componentDidMount () {
    this.setState({ moves: this.props.game })

    if (this.props.game.length > 0) {
      this.showNextMove()
    }
  }

  playRound = e => {
    this.round.push(parseInt(e.target.getAttribute('play')))

    const currentGame = this.props.game.slice(0, this.round.length)
    this.props.validate({ game: currentGame, plays: this.round })

    if (this.round.length === this.props.game.length) {
      setTimeout(() => {
        this.props.play(this.round)
        this.props.validate({ game: this.props.game, plays: this.round })
      }, 1000)
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
    return (
      <div game='game' className='game'>
        <SimonButton
          play={1}
          onClick={this.playRound}
          active={activeButton}
          avatar={this.props.items[0][0]}
          className='button green'
          sounds={this.sounds}
        />
        <SimonButton
          play={2}
          onClick={this.playRound}
          active={activeButton}
          avatar={this.props.items[0][1]}
          className='button red'
          sounds={this.sounds}
        />
        <SimonButton
          play={3}
          onClick={this.playRound}
          active={activeButton}
          avatar={this.props.items[0][2]}
          className='button yellow'
          sounds={this.sounds}
        />
        <SimonButton
          play={4}
          onClick={this.playRound}
          active={activeButton}
          avatar={this.props.items[0][3]}
          className='button blue'
          sounds={this.sounds}
        />
      </div>
    )
  }
}

const map = state => {
  return {
    game: state.game
  }
}

export default connect(
  map,
  { validate, play }
)(Game)
