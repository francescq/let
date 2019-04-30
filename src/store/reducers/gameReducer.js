import { PLAY, RESTART } from '../actions/types'

const initialGame = []

const nextPlay = () => {
  return Math.floor(Math.random() * 4) + 1
}

export const gameReducer = (game = initialGame, action) => {
  switch (action.type) {
    case PLAY:
      return [...game, nextPlay()]
    case RESTART:
      return [nextPlay()]
    default:
      return game
  }
}
