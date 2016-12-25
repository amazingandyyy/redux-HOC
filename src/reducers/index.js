import { combineReducers } from 'redux';
import authenticationRecuser from './authentication';

const rootReducer = combineReducers({
  authenticated: authenticationRecuser
});

export default rootReducer;
