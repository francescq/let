import { itemsReducer } from '../../../../src/store/reducers/itemsReducer'
import { LOAD_ITEMS } from '../../../../src/store/actions/types'

describe('itemsReducer', () => {
  it('should init to {}', () => {
    const itemsReduced = itemsReducer(undefined, { type: 'foo' })

    expect(itemsReduced).toEqual({})
  })

  it('should return currentItems on others', () => {
    const itemsReduced = itemsReducer({ foo: 'bar' }, { type: 'foo' })

    expect(itemsReduced).toEqual({ foo: 'bar' })
  })

  it('should return the loadedPayload', () => {
    const itemsReduced = itemsReducer(undefined, {
      type: LOAD_ITEMS,
      payload: { foo: 'bar' }
    })

    expect(itemsReduced).toEqual({ foo: 'bar' })
  })
})
