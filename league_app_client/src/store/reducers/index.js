import { combineReducers } from 'redux';
import currentUser from './user';
import roster from './roster';
import errors from './errors';

const rootReducer = combineReducers({
  currentUser,
  roster,
  errors,
});

export default rootReducer;
