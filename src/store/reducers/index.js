import { combineReducers } from 'redux'
import { itemsReducer } from './itemsReducer'
import { playReducer } from './playReducer'
import { gameReducer } from './gameReducer'
import { validateReducer } from './validateReducer'

const rootReducer = combineReducers({
  items: itemsReducer,
  plays: playReducer,
  game: gameReducer,
  valid: validateReducer
})

export default rootReducer
