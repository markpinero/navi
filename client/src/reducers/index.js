import { combineReducers } from 'redux';
import auth from './authReducer';
import api from './apiReducer';

const rootReducer = combineReducers({
  auth,
  api
});

export default rootReducer;
