import { $ } from '../../utils'

/**
 * @class ScoreLabel
 */
export default class ScoreLabel {
  constructor() {
    this.$label = $('.game-current-score')
    this.$labelScore = this.$label.querySelector('span')
  }

  updateLabel(score = '0/0') {
    this.$labelScore.innerText = score
  }
}
