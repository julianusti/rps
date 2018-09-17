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
    selectedGameType: "human_vs_computer"
  }
};

describe('Game reducer suit', () => {
  let store;

  beforeEach(() => {
    store = configureStore({});
  });

  it('should start the game', () => {
    store.dispatch(actions.startGame());

    expect(store.getState()).toEqual({
      ...initialState,
      game: {
        ...initialState.game,
        isPlaying: true,
      }
    });
  });

  it('should end the game', () => {
    store.dispatch(actions.endGame());

    expect(store.getState()).toEqual({
      ...initialState,
      game: {
        ...initialState.game,
        isPlaying: false,
      }
    });
  });

  it('should restart the game', () => {
    store.dispatch(actions.startGame());

    store.dispatch(actions.playerOneMove('rock'));
    store.dispatch(actions.playerTwoMove('paper'));
    store.dispatch(actions.updateScore({playerOne: 1, playerTwo: 0}));

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
        },
        roundsToPlay: 3
      }
    });
  });

  it('should update the game score', () => {
    store.dispatch(actions.updateScore({ playerOne: 1, playerTwo: 0 }));
    expect(store.getState()).toEqual({
      ...initialState,
      game: {
        ...initialState.game,
        score: {
          playerOne: 1,
          playerTwo: 0
        }
      }
    });
  });

  it('should update players shapes', () => {
    store.dispatch(actions.playerOneMove('rock'));
    store.dispatch(actions.playerTwoMove('paper'));

    expect(store.getState()).toEqual({
      ...initialState,
      game: {
        ...initialState.game,
        playerOneSelectedShape: 'rock',
        playerTwoSelectedShape: 'paper'
      }
    });
  });

  it('should update rounds to play', () => {
    let roundsToPlay = store.getState().game.roundsToPlay;
    expect(roundsToPlay).toEqual(3);

    store.dispatch(actions.playerOneMove('rock'));
    store.dispatch(actions.playerTwoMove('paper'));
    store.dispatch(actions.updateRoundsLeft(2));

    expect(store.getState().game.roundsToPlay).toEqual(2);
  });
});
