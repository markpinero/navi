import * as types from '../actions/actionTypes';

const initialState = { countries: {} };

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case types.POPULATE_COUNTRIES:
      return {
        ...state,
        countries: action.countries
      };
    default:
      return state;
  }
}
