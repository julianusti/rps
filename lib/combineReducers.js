/**
 * Combine reducers. Reducers composition.
 *
 * @param {Object[]} reducers
 * @returns {Function}
 * */
const combineReducers = reducers => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action)
      return nextState
    }, {})
  }
}

export default combineReducers
