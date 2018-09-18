import '@babel/polyfill'
import configureStore from './store'
import { ScoreObserver, PlayersMoveObserver, GameControls } from './components'

const store = configureStore()

const gameControls = new GameControls(store)
const scoreObserver = new ScoreObserver(store)
const playersMoveObserver = new PlayersMoveObserver(store)

gameControls.addEvents()

playersMoveObserver.init()
scoreObserver.init()
