import { $ } from '../../utils'

/**
 * @class Moves
 */
export default class Moves {
  constructor() {
    this.$playerOnelabel = $('.player-one .shape')
    this.$playerOneMoveLabel = this.$playerOnelabel.querySelector('span')

    this.$playerTwolabel = $('.player-two .shape')
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
