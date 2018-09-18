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
  },
  settings: {
    gameTypes: ['player_vs_computer', 'computer_vs_computer'],
    selectedGameType: ''
  }
}

describe('Settings reducer suit', () => {
  let store

  beforeEach(() => {
    store = configureStore({})
  })

  it('should be possible to set to play player vs computer', () => {
    store.dispatch(actions.selectGameType('player_vs_computer'))

    expect(store.getState()).toEqual({
      ...initialState,
      settings: {
        ...initialState.settings,
        selectedGameType: 'player_vs_computer'
      }
    })
  })

  it('should be possible to set to play computer vs computer', () => {
    store.dispatch(actions.selectGameType('computer_vs_computer'))

    expect(store.getState()).toEqual({
      ...initialState,
      settings: {
        ...initialState.settings,
        selectedGameType: 'computer_vs_computer'
      }
    })
  })
})
