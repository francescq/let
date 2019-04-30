import React from 'react'
import { connect } from 'react-redux'

import Controls from './Controls'
import Game from './Game'
import { restart, play, validate } from '../store/actions'

export class GameLayout extends React.Component {
  componentDidMount () {
    this.props.restart()
  }

  play = e => {
    const movement = parseInt(e.target.getAttribute('play'))
    this.props.play(movement)
    this.props.validate()
  }

  renderFail () {
    return (
      <div>
        <div>Wrong!!!</div>
        <Controls />
      </div>
    )
  }

  renderGame () {
    return (
      <React.Fragment>
        <Game game={this.props.game} play={this.play} />
        <Controls />
      </React.Fragment>
    )
  }

  render () {
    if (this.props.valid) {
      return this.renderGame()
    } else {
      return this.renderFail()
    }
  }
}

const map = state => {
  return {
    game: state.game,
    valid: state.valid
  }
}

export default connect(
  map,
  { restart, play, validate }
)(GameLayout)
