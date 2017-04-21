import * as types from './actionTypes';
import axios from 'axios';
import cookie from 'react-cookie';

export function createEventSuccess(event) {
  return { type: types.CREATE_HIGHLIGHT_SUCCESS, event };
}

export const createEvent = formData => {
  return dispatch => {
    axios
      .post('/api/user/post', formData, {
        headers: {
          Authorization: cookie.load('token')
        }
      })
      .then(response => console.log(response));
  };
};
