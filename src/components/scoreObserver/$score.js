import { $ } from '../../utils'

/**
 * @class ScoreLabel
 */
export default class ScoreLabel {
  constructor() {
    this.$playerOnelabel = $('.player-one .score')
    this.$playerOneScoreLabel = this.$playerOnelabel.querySelector('span')

    this.$playerTwolabel = $('.player-two .score')
    this.$playerTwoScoreLabel = this.$playerTwolabel.querySelector('span')
  }

  updateLabel(score) {
    const { playerOne, playerTwo } = score
    this.$playerOneScoreLabel.innerText = playerOne
    this.$playerTwoScoreLabel.innerText = playerTwo
  }
}
