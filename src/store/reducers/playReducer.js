import { PLAY, RESTART } from '../actions/types'

const initialPlays = []

export const playReducer = (plays = initialPlays, action) => {
  switch (action.type) {
    case PLAY:
      return [...plays, action.payload]
    case RESTART:
      return initialPlays
    default:
      return plays
  }
}
