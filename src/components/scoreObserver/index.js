import ScoreLabel from './$label'

/**
 * @class ScoreObserver
 */
export default class ScoreObserver {
  constructor(store) {
    this.store = store
    this.$label = new ScoreLabel()
  }

  updateScore() {
    const {
      game: { isPlaying, score }
    } = this.store.getState()

    if (!isPlaying) {
      return
    }

    this.$label.updateLabel(`${score.playerOne}/${score.playerTwo}`)
  }

  init() {
    this.store.subscribe(this.updateScore.bind(this))
    console.info('ScoreObserver - initialzied.')
  }
}
