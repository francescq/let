import { PLAY, RESTART, VALIDATE, SET_TURN } from './types'
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

export const validate = gameAndPlays => async (dispatch, getState) => {
  console.log('validate')

  gameAndPlays.turn = getState().turn

  return dispatch({
    type: VALIDATE,
    payload: gameAndPlays
  })
}

export const setTurns = turns => {
  return {
    type: SET_TURN,
    payload: turns
  }
}
