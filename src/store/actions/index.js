import { PLAY, RESTART, VALIDATE } from './types'
import '@babel/polyfill'

export const play = playArray => async dispatch => {
  console.log('play', playArray)
  return dispatch({
    type: PLAY,
    payload: playArray
  })
}

export const restart = () => {
  console.log('restart')
  return {
    type: RESTART
  }
}

export const validate = gameAndPlays => async dispatch => {
  console.log('validate')

  return dispatch({
    type: VALIDATE,
    payload: gameAndPlays
  })
}
