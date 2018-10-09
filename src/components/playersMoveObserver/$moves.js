import { $ } from '../../utils'

/**
 * @class Moves
 */
export default class Moves {
  constructor() {
    this.$playerOnelabel = $('.player-one')
    this.$playerOneMoveLabel = this.$playerOnelabel.querySelector('span')

    this.$playerTwolabel = $('.player-two')
    this.$playerTwoMoveLabel = this.$playerTwolabel.querySelector('span')
  }

  updateMoves(playerOneMove = '', playerTwoMove = '') {
    const emoji = {
      paper: `✋`,
      rock: `👊`,
      scissors: `✌`,
      spock: `🖖`,
      lizard: `🐸`
    }

    this.$playerOneMoveLabel.innerText = emoji[playerOneMove] || ''
    this.$playerTwoMoveLabel.innerText = emoji[playerTwoMove] || ''
  }
}
