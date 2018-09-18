import { $$ } from '../utils'
import { restartGame } from '../actions'
/**
 * @class SettingsControls
 */
export default class SettingsControls {
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
    Array.from($$('.settings-header button')).forEach(e => {
      e.addEventListener('click', this.onClick.bind(this))
    })

    console.info('SettingsControls - event listeners added.')
  }
}
