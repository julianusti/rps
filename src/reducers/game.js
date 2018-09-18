import {
  GAME_END,
  GAME_RESTART,
  PLAYER_ONE_SELECTED_SHAPE,
  PLAYER_TWO_SELECTED_SHAPE,
  UPDATE_SCORE
} from '../constants'

const initialState = {
  playerOneSelectedShape: undefined,
  playerTwoSelectedShape: undefined,
  isPlaying: true,
  score: {
    playerOne: 0,
    playerTwo: 0
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GAME_END:
      return {
        ...state,
        isPlaying: false
      }
    case GAME_RESTART:
      return {
        ...state,
        isPlaying: true,
        score: {
          playerOne: 0,
          playerTwo: 0
        },
        playerOneSelectedShape: undefined,
        playerTwoSelectedShape: undefined
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
    case UPDATE_SCORE:
      return {
        ...state,
        score: action.payload.score
      }
    default:
      return state
  }
}
