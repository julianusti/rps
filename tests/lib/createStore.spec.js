import { createStore, combineReducers } from '../../lib'
import * as actions from '../../src/actions'
import reducers from '../../src/reducers'

const initialState = {
  game: {
    playerOneSelectedShape: undefined,
    playerTwoSelectedShape: undefined,
    isPlaying: true,
    score: {
      playerOne: 0,
      playerTwo: 0
    }
  },
  settings: {
    gameTypes: ['player_vs_computer', 'computer_vs_computer'],
    selectedGameType: 'player_vs_computer'
  }
}

describe('Simplified version of redux createSotre function', () => {
  it('should exposes the public API', () => {
    const store = createStore(combineReducers(reducers))
    const methods = Object.keys(store)

    expect(methods.length).toBe(3)
    expect(methods).toContain('subscribe')
    expect(methods).toContain('dispatch')
    expect(methods).toContain('getState')
  })

  it('should pass the initial state', () => {
    const store = createStore(reducers, {})

    expect(store.getState()).toEqual(initialState)
  })

  it('should applies the reducer to the previous state', () => {
    const store = createStore(reducers, {})
    expect(store.getState()).toEqual(initialState)

    store.dispatch(actions.updateScore({ playerOne: 1, playerTwo: 0 }))
    expect(store.getState()).toEqual({
      ...initialState,
      game: {
        ...initialState.game,
        score: {
          playerOne: 1,
          playerTwo: 0
        }
      }
    })

    store.dispatch(actions.updateScore({ playerOne: 2, playerTwo: 0 }))
    expect(store.getState()).toEqual({
      ...initialState,
      game: {
        ...initialState.game,
        score: {
          playerOne: 2,
          playerTwo: 0
        }
      }
    })
  })
})
