import { $$ } from '../utils'
import { updateScore, playerOneMove, playerTwoMove } from '../actions'
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
        this.play('paper')
        return
      case 'ROCK_SHAPE':
        this.play('rock')
        return
      case 'SCISSORS_SHAPE':
        this.play('scissors')
        return
      default:
        return
    }
  }
  /**
   * Adds event listener to `window` object.
   */
  addEvents() {
    Array.from($$('.game-footer button')).forEach(e => {
      e.addEventListener('click', this.onClick.bind(this))
    })

    console.info('GameControls - event listeners added.')
  }

  play(shape) {
    const result = playVsComputer({ shape })
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
