import { createStore } from '../../lib'
import reducers from '../reducers'

export default function configureStore() {
  return createStore(reducers)
}
