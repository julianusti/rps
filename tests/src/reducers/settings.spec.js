import * as actions from '../../../src/actions';
import configureStore from '../../../src/store';

const initialState = {
  game: {
    playerOneSelectedShape: undefined,
    playerTwoSelectedShape: undefined,
    isPlaying: false,
    score: {
      playerOne: 0,
      playerTwo: 0
    },
    roundsToPlay: 3
  },
  settings: {
    gameShapes: ["paper", "rock", "scissors"],
    gameTypes: ["human_vs_computer", "computer_vs_computer"],
    selectedGameType: ""
  }
};

describe('Settings reducer suit', () => {
  let store;

  beforeEach(() => {
    store = configureStore({});
  });

  it('should be possible to set to play human vs computer', () => {
    store.dispatch(actions.selectGameType('human_vs_computer'));

    expect(store.getState()).toEqual({
      ...initialState,
      settings: {
        ...initialState.settings,
        selectedGameType: 'human_vs_computer',
      }
    });
  });

  it('should be possible to set to play computer vs computer', () => {
    store.dispatch(actions.selectGameType('computer_vs_computer'));

    expect(store.getState()).toEqual({
      ...initialState,
      settings: {
        ...initialState.settings,
        selectedGameType: 'computer_vs_computer',
      }
    });
  });
});
