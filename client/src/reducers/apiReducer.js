import * as types from '../actions/actionTypes';

const initialState = { events: [], errors: {} };

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.events
      };
    default:
      return state;
  }
}
