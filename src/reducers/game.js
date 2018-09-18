import {
  GAME_START,
  GAME_END,
  GAME_RESTART,
  PLAYER_ONE_SELECTED_SHAPE,
  PLAYER_TWO_SELECTED_SHAPE,
  SET_ROUNDS_TO_PLAY,
  UPDATE_SCORE,
  UPDATE_ROUNDS_LEFT
} from '../constants'

const initialState = {
  playerOneSelectedShape: undefined,
  playerTwoSelectedShape: undefined,
  isPlaying: false,
  score: {
    playerOne: 0,
    playerTwo: 0
  },
  roundsToPlay: 3
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GAME_START:
      return {
        ...state,
        isPlaying: true
      }
    case GAME_END:
      return {
        ...state,
        isPlaying: false
      }
    case GAME_RESTART:
      return {
        ...state,
        isPlaying: false,
        score: {
          playerOne: 0,
          playerTwo: 0
        },
        roundsToPlay: 3
      }
    case PLAYER_ONE_SELECTED_SHAPE:
      return {
        ...state,
        playerOneSelectedShape: action.payload.playerOneSelectedShape
      }
    case PLAYER_TWO_SELECTED_SHAPE:
      return {
        ...state,
        playerTwoSelectedShape: action.payload.playerTwoSelectedShape
      }
    case SET_ROUNDS_TO_PLAY:
      return {
        ...state,
        roundsToPlay: action.payload.roundsToPlay
      }
    case UPDATE_ROUNDS_LEFT:
      return {
        ...state,
        roundsToPlay: action.payload.roundsToPlay
      }
    case UPDATE_SCORE:
      return {
        ...state,
        score: action.payload.score
      }
    default:
      return state
  }
}
