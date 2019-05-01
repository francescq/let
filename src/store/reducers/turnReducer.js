import { PLAY, RESTART, SET_TURN } from '../actions/types'

const initTurn = 5

export const turnReducer = (turn = initTurn, action) => {
  switch (action.type) {
    case PLAY:
      return turn - 1
    case RESTART:
      return initTurn
    case SET_TURN:
      return action.payload
    default:
      return turn
  }
}
