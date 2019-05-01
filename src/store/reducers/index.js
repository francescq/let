import { combineReducers } from 'redux'
import { itemsReducer } from './itemsReducer'
import { playReducer } from './playReducer'
import { gameReducer } from './gameReducer'
import { validateReducer } from './validateReducer'
import { turnReducer } from './turnReducer'

const rootReducer = combineReducers({
  items: itemsReducer,
  plays: playReducer,
  game: gameReducer,
  valid: validateReducer,
  turn: turnReducer
})

export default rootReducer
