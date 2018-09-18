import {
  SELECTED_GAME_TYPE,
  GAME_END,
  GAME_RESTART,
  PLAYER_ONE_SELECTED_SHAPE,
  PLAYER_TWO_SELECTED_SHAPE,
  UPDATE_SCORE
} from '../constants'

export const endGame = () => ({
  type: GAME_END,
  payload: {
    isPlaying: false
  }
})

export const restartGame = () => ({
  type: GAME_RESTART,
  payload: {
    playerOneSelectedShape: undefined,
    playerTwoSelectedShape: undefined,
    isPlaying: true,
    score: {
      playerOne: 0,
      playerTwo: 0
    }
  }
})

export const selectGameType = selectedGameType => ({
  type: SELECTED_GAME_TYPE,
  payload: {
    selectedGameType
  }
})

export const playerOneMove = playerOneSelectedShape => ({
  type: PLAYER_ONE_SELECTED_SHAPE,
  payload: {
    playerOneSelectedShape
  }
})

export const playerTwoMove = playerTwoSelectedShape => ({
  type: PLAYER_TWO_SELECTED_SHAPE,
  payload: {
    playerTwoSelectedShape
  }
})

export const updateScore = score => ({
  type: UPDATE_SCORE,
  payload: {
    score
  }
})
