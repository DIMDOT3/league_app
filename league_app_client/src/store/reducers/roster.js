import { GET_ROSTER, ADD_PLAYER, REMOVE_PLAYER } from '../actions/actionTypes';

const DEFAULT_STATE = [];

function roster(state=DEFAULT_STATE, action) {
  switch(action.type) {
    case GET_ROSTER:
      return [ ...action.roster ];
    case ADD_PLAYER:
      return [ ...state, action.player ];
    case REMOVE_PLAYER:
      return state.filter(player => player.id !== action.id);
    default:
      return state;
  }
};

export default roster;
