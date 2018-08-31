import { SET_CURRENT_USER } from '../actions/actionTypes';

const DEFAULT_STATE = {
  user: {},
  isAuthenticated: false,
};

function currentUser(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        user: action.user,
        isAuthenticated: Object.keys(action.user).length > 0,
      };
    default:
      return state;
  }
}

export default currentUser;
