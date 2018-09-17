import configureStore from '../../../src/store';

describe('Configure store with preloaded state suit', () => {
  it('should return store with preloaded initial state', () => {
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
        selectedGameType: "human_vs_computer"
      }
    };

    const store = configureStore({});
    expect(store.getState()).toEqual(initialState);
  });
});
