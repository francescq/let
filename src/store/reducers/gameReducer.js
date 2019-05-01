import { PLAY, RESTART } from '../actions/types'
import RandomGenerator from './utils/RandomGenerator'

const initialGame = []

const nextPlay = () => {
  const ran = new RandomGenerator()
  return ran.random(4)
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
