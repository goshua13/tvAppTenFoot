import { combineReducers } from 'redux';
import usersReducer from './usersReducers';
import idReducer from './idReducer';

export default combineReducers({
  menu: usersReducer,
  id: idReducer,
});