import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function uiReducers(state = initialState.ui, action) {
  switch (action.type) {
    case types.API_START:
      return {
        ...state,
        requests: state.requests + 1
      };
    case types.API_DONE:
      return {
        ...state,
        requests: state.requests - 1
      };
    default:
      return state;
  }
}
