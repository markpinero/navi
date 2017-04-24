import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function apiReducers(state = initialState.api, action) {
  switch (action.type) {
    case types.GET_ALL_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.events
      };
    case types.GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
}
