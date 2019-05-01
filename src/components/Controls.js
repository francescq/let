import React from 'react'
import { connect } from 'react-redux'
import { restart, setTurns } from '../store/actions'
import './Controls.scss'

export class Controls extends React.Component {
  state = { turns: 3 }

  restart = () => {
    this.props.restart()
  }

  setTurns = () => {
    this.props.setTurns(this.state.turns)
  }

  onTurnChange = e => {
    this.setState({ turns: e.target.value })
  }

  render () {
    return (
      <div className='controls'>
        Controls
        <button onClick={this.restart}>Restart</button>
        <div>Current turn {this.props.plays.length}</div>
        <div>Next play {this.props.game.slice().toString()}</div>
        <div>
          <button onClick={this.setTurns}>Set turns</button>{' '}
          <input
            id='turns'
            type='text'
            onChange={this.onTurnChange}
            value={this.state.turns}
          />
        </div>
      </div>
    )
  }
}

const map = state => {
  return {
    plays: state.plays,
    game: state.game,
    valid: state.valid
  }
}

export default connect(
  map,
  { restart, setTurns }
)(Controls)
