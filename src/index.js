import '@babel/polyfill'
import configureStore from './store'
import {
  SettingsControl,
  ScoreObserver,
  PlayersMoveObserver,
  GameControls
} from './components'

const store = configureStore()

const gameControls = new GameControls(store)
const scoreObserver = new ScoreObserver(store)
const playersMoveObserver = new PlayersMoveObserver(store)
const settingsControl = new SettingsControl(store)

gameControls.addEvents()
settingsControl.addEvents()

playersMoveObserver.init()
scoreObserver.init()
