import * as types from './actionTypes';
import axios from 'axios';
import cookie from 'react-cookie';

export const getUserDetailsSuccess = user => ({
  type: types.GET_USER_DETAILS_SUCCESS,
  user
});

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

export const getEvent = eventId => {
  console.log(eventId);
  return dispatch => {
    axios
      .get(`/api/events/get/${eventId}`, authToken)
      .then(response => console.log(response));
  };
};

export const getUserDetails = () => {
  return dispatch => {
    axios.get('/api/user/get', authToken).then(response => {
      dispatch(getUserDetailsSuccess(response.data));
    });
  };
};

export const getAllEvents = () => {
  return dispatch => {
    axios
      .get('/api/events/get/all', authToken)
      .then(response => {
        dispatch(getAllEventsSuccess(response.data));
      })
      .catch(error => console.log(error));
  };
};

export const createEvent = event => {
  return dispatch => {
    axios
      .post('/api/events/create', event, authToken)
      .then(response => console.log(response));
  };
};

export const deleteEvent = event => {
  return dispatch => {
    axios
      .delete('/api/events/delete', event, authToken)
      .then(response => console.log(response));
  };
};

export const updateEvent = event => {
  return dispatch => {
    axios
      .update('/api/events/update', event, authToken)
      .then(response => console.log(response));
  };
};
