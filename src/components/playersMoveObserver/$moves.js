import { $ } from '../../utils'

/**
 * @class Moves
 */
export default class Moves {
  constructor() {
    this.$playerOnelabel = $('.game-player-one-shape')
    this.$playerOneMoveLabel = this.$playerOnelabel.querySelector('span')

    this.$playerTwolabel = $('.game-player-two-shape')
    this.$playerTwoMoveLabel = this.$playerTwolabel.querySelector('span')
  }

  updateMoves(playerOneMove = '', playerTwoMove = '') {
    this.$playerOneMoveLabel.innerText = playerOneMove
    this.$playerTwoMoveLabel.innerText = playerTwoMove
  }
}
