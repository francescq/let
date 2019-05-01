import React from 'react'
import { connect } from 'react-redux'
import { loadItems } from '../store/actions/loadItems'
import GameLayout from './GameLayout'
import './App.scss'

export class App extends React.Component {
  componentDidMount () {
    this.props.loadItems(4)
  }

  returnLoadingState () {
    return (
      <div app-loading='true' className='app-loading'>
        Loading images...
      </div>
    )
  }

  renderGame () {
    return (
      <div game='true' className='game-container'>
        <GameLayout items={this.props.items} />
      </div>
    )
  }

  render () {
    if (this.props.items.length === 0) {
      return this.returnLoadingState()
    } else {
      return this.renderGame()
    }
  }
}

const map = state => {
  return {
    items: Object.values(state.items)
  }
}
export default connect(
  map,
  { loadItems }
)(App)
