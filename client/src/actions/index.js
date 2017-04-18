import * as types from './actionTypes';
import axios from 'axios';
import cookie from 'react-cookie';

const CLIENT_ROOT_URL = 'http://localhost:3000';

export function authenticateUser(user) {
  return { type: types.AUTHENTICATE_USER, user };
}

export function unauthenticateUser(user) {
  return { type: types.UNAUTHENTICATE_USER, user };
}

export const registerUser = ({ email, password }) => {
  return dispatch => {
    axios
      .post('/api/auth/register', { email, password })
      .then(response => {
        console.log(response);
        cookie.save('token', response.data.token, { path: '/' });
        dispatch(authenticateUser(response.data.user));
        window.location.href = `${CLIENT_ROOT_URL}/onboarding`;
      })
      .catch(err => console.log(err));
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    axios.post('/api/auth/login', { email, password }).then(response => {
      cookie.save('token', response.data.token, { path: '/' });
      dispatch(authenticateUser(response.data.user));
      window.location.href = `${CLIENT_ROOT_URL}`;
    });
  };
};

export const logoutUser = () => {
  return dispatch => {
    console.log('logout action');
    cookie.remove('token', { path: '/' });
    dispatch(unauthenticateUser);
    window.location.href = `${CLIENT_ROOT_URL}`;
  };
};
