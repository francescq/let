import React from 'react'
import { connect } from 'react-redux'

import Controls from './Controls'
import Game from './Game'
import Header from './Header'
import { restart, validate } from '../store/actions'
import { DEFEAT, PLAY, VICTORY } from '../store/actions/gameStates'

import './GameLayout.scss'

export class GameLayout extends React.Component {
  sounds = {
    defeat: new Audio('http://soundbible.com/grab.php?id=1129&type=mp3'),
    victory: new Audio('http://soundbible.com/grab.php?id=1964&type=mp3')
  }

  componentDidMount () {
    this.props.restart()
  }

  renderDefeat () {
    this.sounds.defeat.play()
    return (
      <div>
        <div className='game-defeat'>Wrong!!!</div>
      </div>
    )
  }

  renderVictory () {
    this.sounds.victory.play()
    return (
      <div>
        <div className='game-victory'>Wrong!!!</div>
      </div>
    )
  }

  renderGame () {
    // console.log('renderGame')
    return (
      <Game
        game={this.props.game}
        key={Math.random()}
        items={this.props.items}
      />
    )
  }

  render () {
    let content
    switch (this.props.valid) {
      case DEFEAT:
        content = this.renderDefeat()
        break
      case PLAY:
        content = this.renderGame()
        break
      case VICTORY:
        content = this.renderVictory()
        break
      default:
        content = this.renderGame()
    }

    return (
      <React.Fragment>
        <Header
          turn={this.props.turn}
          valid={this.props.valid}
          hero={this.props.items[1][0]}
        />
        {content}
        <Controls />
      </React.Fragment>
    )
  }
}

const map = state => {
  return {
    game: state.game,
    items: state.items,
    valid: state.valid,
    turn: state.turn
  }
}

export default connect(
  map,
  { restart, validate }
)(GameLayout)
