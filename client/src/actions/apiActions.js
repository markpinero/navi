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

export const apiStart = () => ({ type: types.API_START });
export const apiDone = () => ({ type: types.API_DONE });

const authToken = { headers: { Authorization: cookie.load('token') } };

export const getEvent = eventId => {
  return dispatch => {
    dispatch(apiStart());
    axios
      .get(`/api/events/get/${eventId}`, authToken)
      .then(response => {
        dispatch(apiDone());
      })
      .catch(error => {
        dispatch(apiDone());
        console.log(error);
      });
  };
};

export const getUserDetails = () => {
  return dispatch => {
    dispatch(apiStart());
    axios.get('/api/user/get', authToken).then(response => {
      dispatch(apiDone());
      dispatch(getUserDetailsSuccess(response.data));
    });
  };
};

export const getAllEvents = () => {
  return dispatch => {
    dispatch(apiStart());
    axios
      .get('/api/events/get/all', authToken)
      .then(response => {
        dispatch(apiDone());
        dispatch(getAllEventsSuccess(response.data));
      })
      .catch(error => {
        dispatch(apiDone());
        console.log(error);
      });
  };
};

export const createEvent = event => {
  return dispatch => {
    dispatch(apiStart());
    axios
      .post('/api/events/create', event, authToken)
      .then(response => {
        dispatch(apiDone());
        console.log(response);
      })
      .catch(error => {
        dispatch(apiDone());
        console.log(error);
      });
  };
};

export const deleteEvent = event => {
  return dispatch => {
    dispatch(apiStart());
    axios
      .delete('/api/events/delete', event, authToken)
      .then(response => {
        dispatch(apiDone());
        console.log(response);
      })
      .catch(error => {
        dispatch(apiDone());
        console.log(error);
      });
  };
};

export const updateEvent = event => {
  return dispatch => {
    dispatch(apiStart());
    axios
      .update('/api/events/update', event, authToken)
      .then(response => {
        dispatch(apiDone());
        console.log(response);
      })
      .catch(error => {
        dispatch(apiDone());
        console.log(error);
      });
  };
};
