import * as actions from '../../../src/actions'
import configureStore from '../../../src/store'

const initialState = {
  game: {
    playerOneSelectedShape: undefined,
    playerTwoSelectedShape: undefined,
    isPlaying: true,
    score: {
      playerOne: 0,
      playerTwo: 0
    }
  }
}

describe('Game reducer suit', () => {
  let store

  beforeEach(() => {
    store = configureStore({})
  })

  it('should restart the game', () => {
    store.dispatch(actions.restartGame())

    store.dispatch(actions.playerOneMove('rock'))
    store.dispatch(actions.playerTwoMove('paper'))
    store.dispatch(actions.updateScore({ playerOne: 1, playerTwo: 0 }))

    expect(store.getState()).toEqual({
      ...initialState,
      game: {
        ...initialState.game,
        isPlaying: true,
        playerOneSelectedShape: 'rock',
        playerTwoSelectedShape: 'paper',
        score: {
          playerOne: 1,
          playerTwo: 0
        }
      }
    })
  })

  it('should update the game score', () => {
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
  })

  it('should update players shapes', () => {
    store.dispatch(actions.playerOneMove('rock'))
    store.dispatch(actions.playerTwoMove('paper'))

    expect(store.getState()).toEqual({
      ...initialState,
      game: {
        ...initialState.game,
        playerOneSelectedShape: 'rock',
        playerTwoSelectedShape: 'paper'
      }
    })
  })
})
