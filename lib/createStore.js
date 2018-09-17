/**
 * Create redux store.
 *
 * @param {Function} reducer
 * @return {Object[]} create sotre funcions
 * */
const createStore = (reducer, preloadedState) => {
  let listeners = [];
  let currentState = preloadedState;

  const getState = () => currentState;

  // dispatch() function is the only way to change a state of the app
  // by dispatching specific action.
  const dispatch = action => {
    currentState = reducer(currentState, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = listener => {
    listeners.push(listener);

    // unsubscribe from listener.
    return function unsubscribe() {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  dispatch({});

  return { getState, dispatch, subscribe };
};

export default createStore;
