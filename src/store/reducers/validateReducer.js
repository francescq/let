import { VALIDATE, RESTART } from '../../store/actions/types'

const checkGame = ({ plays, game }) => {
  console.log(JSON.stringify(plays), JSON.stringify(game))
  return JSON.stringify(plays) === JSON.stringify(game)
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
