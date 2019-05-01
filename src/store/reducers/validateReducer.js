import { VALIDATE, RESTART } from '../../store/actions/types'
import { DEFEAT, GAME, VICTORY } from '../actions/gameStates'

const checkGame = ({ plays, game }) => {
  // console.log(JSON.stringify(plays), JSON.stringify(game))
  return JSON.stringify(plays) === JSON.stringify(game)
}

const initialValidation = GAME
export const validateReducer = (valid = initialValidation, action) => {
  switch (action.type) {
    case VALIDATE:
      return action.payload.turn === 0
        ? VICTORY
        : checkGame(action.payload)
          ? GAME
          : DEFEAT

    case RESTART:
      return GAME
    default:
      return valid
  }
}
