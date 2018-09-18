import ScoreLabel from './$score'

/**
 * @class ScoreObserver
 */
export default class ScoreObserver {
  constructor(store) {
    this.store = store
    this.$score = new ScoreLabel()
  }

  updateScore() {
    const {
      game: { isPlaying, score }
    } = this.store.getState()

    if (!isPlaying) {
      return
    }

    this.$score.updateLabel(`${score.playerOne}/${score.playerTwo}`)
  }

  init() {
    this.store.subscribe(this.updateScore.bind(this))
    console.info('ScoreObserver - initialzied.')
  }
}
