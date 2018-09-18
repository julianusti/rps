/**
 * Simplified version of redux.combineReducers function.
 * [IMPORTANT] it doesn't covers all edge case.
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
