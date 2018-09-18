import { combineReducers } from '../../lib'

import game from './game'
import settings from './settings'

export default combineReducers({
  game,
  settings
})
