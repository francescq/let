import React from 'react'
import { connect } from 'react-redux'

import Controls from './Controls'
import Game from './Game'
import Header from './Header'
import { restart, play, validate } from '../store/actions'
import './GameLayout.scss'

export class GameLayout extends React.Component {
  sounds = {
    wrong: new Audio('http://soundbible.com/grab.php?id=1129&type=mp3'),
    success: new Audio('http://soundbible.com/grab.php?id=1964&type=mp3')
  }

  componentDidMount () {
    this.props.restart()
  }

  play = play => {
    this.props.play(play)
    this.props.validate()
  }

  renderFail () {
    this.sounds.wrong.play()
    return (
      <div>
        <div className='game-fail'>Wrong!!!</div>
      </div>
    )
  }

  renderGame () {
    // console.log('renderGame')
    return (
      <Game
        game={this.props.game}
        play={this.play}
        key={Math.random()}
        items={this.props.items}
      />
    )
  }

  render () {
    const content = this.props.valid ? this.renderGame() : this.renderFail()
    return (
      <React.Fragment>
        <Header valid={this.props.valid} hero={this.props.items[1][0]} />
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
    valid: state.valid
  }
}

export default connect(
  map,
  { restart, play, validate }
)(GameLayout)
