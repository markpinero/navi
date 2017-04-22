import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authReducers(state = initialState.auth, action) {
  switch (action.type) {
    case types.AUTHENTICATE_USER:
      return {
        ...state,
        authenticated: true
      };
    case types.UNAUTHENTICATE_USER:
      return {
        ...state,
        authenticated: false
      };
    default:
      return state;
  }
}
