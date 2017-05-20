import * as types from './actionTypes';
import { errorHandler } from './';
import axios from 'axios';
import cookie from 'react-cookie';
import { API_URL } from './';

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
      .get(`${API_URL}/api/events/get/${eventId}`, authToken)
      .then(response => {
        dispatch(apiDone());
      })
      .catch(error => {
        dispatch(apiDone());
        errorHandler(dispatch, error.response, types.API_ERROR);
      });
  };
};

export const getUserDetails = () => {
  return dispatch => {
    dispatch(apiStart());
    axios.get(`${API_URL}/api/user/get`, authToken).then(response => {
      dispatch(apiDone());
      dispatch(getUserDetailsSuccess(response.data));
    });
  };
};

export const getAllEvents = () => {
  return dispatch => {
    dispatch(apiStart());
    axios
      .get(`${API_URL}/api/events/get/all`, authToken)
      .then(response => {
        dispatch(apiDone());
        dispatch(getAllEventsSuccess(response.data));
      })
      .catch(error => {
        dispatch(apiDone());
        errorHandler(dispatch, error.response, types.API_ERROR);
      });
  };
};

export const createEvent = event => {
  return dispatch => {
    dispatch(apiStart());
    axios
      .post(`${API_URL}/api/events/create`, event, authToken)
      .then(response => {
        dispatch(apiDone());
        setTimeout(function() {
          window.location.href = '/';
        }, 300);
      })
      .catch(error => {
        dispatch(apiDone());
        errorHandler(dispatch, error.response, types.API_ERROR);
      });
  };
};

export const deleteEvent = event => {
  return dispatch => {
    dispatch(apiStart());
    axios
      .delete(`${API_URL}/api/events/delete`, event, authToken)
      .then(response => {
        dispatch(apiDone());
        console.log(response);
      })
      .catch(error => {
        dispatch(apiDone());
        errorHandler(dispatch, error.response, types.API_ERROR);
      });
  };
};

export const updateEvent = event => {
  return dispatch => {
    dispatch(apiStart());
    axios
      .put(`${API_URL}/api/events/update`, event, authToken)
      .then(response => {
        dispatch(apiDone());
        setTimeout(function() {
          window.location.href = '/';
        }, 300);
      })
      .catch(error => {
        dispatch(apiDone());
        errorHandler(dispatch, error.response, types.API_ERROR);
      });
  };
};

export const getEventDemo = () => {
  return dispatch => {
    dispatch(apiStart());
    axios
      .get(`${API_URL}/api/events/demo`)
      .then(response => {
        dispatch(apiDone());
        dispatch(getAllEventsSuccess(response.data));
      })
      .catch(error => {
        dispatch(apiDone());
        errorHandler(dispatch, error.response, types.API_ERROR);
      });
  };
};

export const getUserDemo = () => {
  return dispatch => {
    dispatch(apiStart());
    axios
      .get(`${API_URL}/api/user/demo`)
      .then(response => {
        dispatch(apiDone());
        dispatch(getUserDetailsSuccess(response.data));
      })
      .catch(error => {
        dispatch(apiDone());
        errorHandler(dispatch, error.response, types.API_ERROR);
      });
  };
};
