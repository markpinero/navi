import * as types from '../actions/actionTypes';

const initialState = { authenticated: false, errors: {} };

export default function reducers(state = initialState, action) {
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
