import * as types from './actionTypes';
import axios from 'axios';
import cookie from 'react-cookie';

export function getAllEventsSuccess(events) {
  return { type: types.GET_ALL_EVENTS_SUCCESS, events };
}

export function createEventSuccess(event) {
  return { type: types.CREATE_EVENT_SUCCESS, event };
}

export const getAllEvents = () => {
  return dispatch => {
    axios
      .get('/api/user/getAll', {
        headers: {
          Authorization: cookie.load('token')
        }
      })
      .then(response => {
        dispatch(getAllEventsSuccess(response.data));
      })
      .catch(error => console.log(error));
  };
};

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
