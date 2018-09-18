import configureStore from '../../../src/store'

describe('Configure store with preloaded state suit', () => {
  it('should return store with preloaded initial state', () => {
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

    const store = configureStore({})
    expect(store.getState()).toEqual(initialState)
  })
})
