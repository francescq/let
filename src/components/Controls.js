import React from 'react'
import { connect } from 'react-redux'
import { restart } from '../store/actions'
import './Controls.scss'

export class Controls extends React.Component {
  restart = () => {
    this.props.restart()
  }

  render () {
    return (
      <div className='controls'>
        Controls
        <button onClick={this.restart}>Restart</button>
        <div>Current turn {this.props.plays.length}</div>
        <div>Next play {this.props.game.slice().toString()}</div>
        <div>Valid {this.props.valid.toString()}</div>
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
  { restart }
)(Controls)
