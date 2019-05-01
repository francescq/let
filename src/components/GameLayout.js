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

  _getContent = () => {
    switch (this.props.valid) {
      case DEFEAT:
        return this.renderDefeat()
      case PLAY:
        return this.renderGame()
      case VICTORY:
        return this.renderVictory()
      default:
        return this.renderGame()
    }
  }

  render () {
    return (
      <React.Fragment>
        <Header />
        {this._getContent()}
        <Controls />
      </React.Fragment>
    )
  }
}

const map = state => {
  return {
    valid: state.valid
  }
}

export default connect(
  map,
  { restart, validate }
)(GameLayout)
