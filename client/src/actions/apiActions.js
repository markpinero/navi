import * as types from './actionTypes';
import axios from 'axios';
import cookie from 'react-cookie';

export const getAllEventsSuccess = events => ({
  type: types.GET_ALL_EVENTS_SUCCESS,
  events
});

export const createEventSuccess = event => ({
  type: types.CREATE_EVENT_SUCCESS,
  event
});

const authToken = {
  headers: {
    Authorization: cookie.load('token')
  }
};

export const getAllEvents = () => {
  return dispatch => {
    axios
      .get('/api/user/getAll', authToken)
      .then(response => {
        dispatch(getAllEventsSuccess(response.data));
      })
      .catch(error => console.log(error));
  };
};

export const createEvent = event => {
  return dispatch => {
    axios
      .post('/api/user/create', event, authToken)
      .then(response => console.log(response));
  };
};

export const deleteEvent = event => {
  return dispatch => {
    axios
      .delete('/api/user/delete', event, authToken)
      .then(response => console.log(response));
  };
};

export const updateEvent = event => {
  return dispatch => {
    axios
      .update('/api/user/update', event, authToken)
      .then(response => console.log(response));
  };
};
