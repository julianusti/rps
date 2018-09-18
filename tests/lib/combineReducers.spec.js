import { combineReducers } from '../../lib'

describe('Simplified version of redux combineReducers function', () => {
  it('returns a composite reducer that maps the state keys to given reducers', () => {
    const reducer = combineReducers({
      counter: (state = 0, action) =>
        action.type === 'increment' ? state + 1 : state,
      stack: (state = [], action) =>
        action.type === 'push' ? [...state, action.value] : state
    })

    const s1 = reducer({}, { type: 'increment' })
    expect(s1).toEqual({ counter: 1, stack: [] })

    const s2 = reducer(s1, { type: 'push', value: 'a' })
    expect(s2).toEqual({ counter: 1, stack: ['a'] })
  })
})
