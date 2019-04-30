import { LOAD_ITEMS } from '../actions/types'

const initialItems = {}

export const itemsReducer = (items = initialItems, action) => {
  switch (action.type) {
    case LOAD_ITEMS:
      return { ...action.payload }
    default:
      return items
  }
}
