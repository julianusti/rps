import { SELECTED_GAME_TYPE } from '../constants'

const initialState = {
  gameTypes: ['player_vs_computer', 'computer_vs_computer'],
  selectedGameType: 'player_vs_computer'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_GAME_TYPE:
      return {
        ...state,
        selectedGameType: action.payload.selectedGameType
      }
    default:
      return state
  }
}
