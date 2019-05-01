import { VALIDATE, RESTART } from '../../store/actions/types'

const checkGame = ({ plays, game }) => {
  const previousGame = game.slice(0, -1)

  // console.log(JSON.stringify(plays), JSON.stringify(previousGame))
  return JSON.stringify(plays) === JSON.stringify(previousGame)
}

const initialValidation = true
export const validateReducer = (valid = initialValidation, action) => {
  switch (action.type) {
    case VALIDATE:
      return checkGame(action.payload)
    case RESTART:
      return true
    default:
      return valid
  }
}
