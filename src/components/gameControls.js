import { $$ } from '../utils'
import {
  updateScore,
  playerOneMove,
  playerTwoMove,
  restartGame
} from '../actions'
import { playVsComputer, computerVsComputer } from '../../rps'

/**
 * @class GameControls
 */
export default class GameControls {
  constructor(store) {
    this.store = store
  }

  /**
   * Takes an event object and dispatches different rps actions.
   * @param {Number} onClick
   * @returns {undefined|ReduxState}
   */
  onClick(e) {
    const actionType = e.currentTarget.dataset.action

    switch (actionType) {
      case 'PAPER_SHAPE':
        this.playPlayerVsComputer('paper')
        return
      case 'ROCK_SHAPE':
        this.playPlayerVsComputer('rock')
        return
      case 'SCISSORS_SHAPE':
        this.playPlayerVsComputer('scissors')
        return
      case 'COMPUTER_VS_COMPUTER':
        this.playComputerVsCompuer()
        return
      case 'RESTART_GAME':
        this.store.dispatch(restartGame())
        return
      default:
        return
    }
  }

  /**
   * Adds event listener to `window` object.
   */
  addEvents() {
    Array.from($$('.game-controls button')).forEach(e => {
      e.addEventListener('click', this.onClick.bind(this))
    })

    console.info('GameControls - event listeners added.')
  }

  playPlayerVsComputer(shape) {
    const result = playVsComputer({ shape })
    const dispatchActions = this.updateResult(result)

    dispatchActions()
  }

  playComputerVsCompuer() {
    const result = computerVsComputer()
    const dispatchActions = this.updateResult(result)

    dispatchActions()
  }

  updateResult({
    playerOneSelectedShape,
    playerTwoSelectedShape,
    result: { playerOneVsPlayerTwo }
  }) {
    let {
      game: {
        score: { playerOne, playerTwo }
      }
    } = this.store.getState()

    const update = {
      win: () => {
        this.store.dispatch(
          updateScore({
            playerOne: ++playerOne,
            playerTwo
          })
        )

        this.store.dispatch(playerOneMove(playerOneSelectedShape))
        this.store.dispatch(playerTwoMove(playerTwoSelectedShape))
      },
      lose: () => {
        this.store.dispatch(
          updateScore({
            playerOne,
            playerTwo: ++playerTwo
          })
        )
        this.store.dispatch(playerOneMove(playerOneSelectedShape))
        this.store.dispatch(playerTwoMove(playerTwoSelectedShape))
      },
      tie: () => {
        this.store.dispatch(playerOneMove(playerOneSelectedShape))
        this.store.dispatch(playerTwoMove(playerTwoSelectedShape))
      }
    }

    return update[playerOneVsPlayerTwo] || (() => {})
  }
}
