import * as actions from '../../../src/actions'

import * as types from '../../../src/constants'

describe('Action creators suit', () => {
  it('should create an action to restart the game', () => {
    const expectedAction = {
      type: types.GAME_RESTART,
      payload: {
        isPlaying: true,
        playerOneSelectedShape: undefined,
        playerTwoSelectedShape: undefined,
        score: {
          playerOne: 0,
          playerTwo: 0
        }
      }
    }

    expect(actions.restartGame()).toEqual(expectedAction)
  })

  it('should create an action when first player plays a shape paper|rock|scissors', () => {
    const playerOneSelectedShape = 'paper'
    const expectedAction = {
      type: types.PLAYER_ONE_SELECTED_SHAPE,
      payload: { playerOneSelectedShape }
    }

    expect(actions.playerOneMove(playerOneSelectedShape)).toEqual(
      expectedAction
    )
  })

  it('should create an action when second player plays a shape paper|rock|scissors', () => {
    const playerTwoSelectedShape = 'rock'
    const expectedAction = {
      type: types.PLAYER_TWO_SELECTED_SHAPE,
      payload: { playerTwoSelectedShape }
    }

    expect(actions.playerTwoMove(playerTwoSelectedShape)).toEqual(
      expectedAction
    )
  })

  it('should create an action update score', () => {
    const playersScores = { playerOne: 1, playerTwo: 0 }

    const expectedAction = {
      type: types.UPDATE_SCORE,
      payload: {
        score: playersScores
      }
    }

    expect(actions.updateScore(playersScores)).toEqual(expectedAction)
  })
})
