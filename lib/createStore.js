/**
 * Simplified version of redux.createStore function.
 * [IMPORTANT] it doesn't covers all edge case.
 *
 * @param {Function} reducer
 * @return {Object[]} create sotre funcions
 * */
const createStore = (reducer, preloadedState) => {
  let listeners = []
  let currentState = preloadedState

  const getState = () => currentState

  const dispatch = action => {
    currentState = reducer(currentState, action)
    listeners.forEach(listener => listener())

    logAction(action)
  }

  const subscribe = listener => {
    listeners.push(listener)

    return function unsubscribe() {
      listeners = listeners.filter(l => l !== listener)
    }
  }

  dispatch({})

  return { getState, dispatch, subscribe }
}

const logAction = action => {
  /*
    For debugging purpose output action.type and
    action.payload the browser's console
  */
  if (action && action.type && action.payload) {
    console.group()
    console.info(`${action.type} action - dispatched successfully.`)
    console.info(`with payload ${JSON.stringify(action.payload)}`)
    console.groupEnd()
  }
}

export default createStore
