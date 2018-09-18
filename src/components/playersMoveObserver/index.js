import PlayersMoves from './$moves'

/**
 * @class PlayersMoveObserver
 */
export default class PlayersMoveObserver {
  constructor(store) {
    this.store = store
    this.$moves = new PlayersMoves()
  }

  updatePlayersMoves() {
    const {
      game: { isPlaying, playerOneSelectedShape, playerTwoSelectedShape }
    } = this.store.getState()

    if (!isPlaying) {
      return
    }

    this.$moves.updateMoves(playerOneSelectedShape, playerTwoSelectedShape)
  }

  init() {
    this.store.subscribe(this.updatePlayersMoves.bind(this))
    console.info('PlayersMoveObserver - initialzied.')
  }
}
