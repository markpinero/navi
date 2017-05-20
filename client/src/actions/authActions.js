import * as types from "./actionTypes";
import { errorHandler } from "./";
import axios from "axios";
import cookie from "react-cookie";
import { API_URL } from "./";

export function authenticateUser(user) {
  return { type: types.AUTHENTICATE_USER, user };
}

export function unauthenticateUser(user) {
  return { type: types.UNAUTHENTICATE_USER, user };
}

export const registerUser = data => {
  return dispatch => {
    axios
      .post(`${API_URL}/api/auth/register`, data)
      .then(response => {
        console.log(response);
        cookie.save("token", response.data.token, { path: "/" });
        dispatch(authenticateUser(response.data.user));
        window.location.href = "/";
      })
      .catch(error => {
        errorHandler(dispatch, error.response, types.AUTH_ERROR);
      });
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    axios
      .post(`${API_URL}/api/auth/login`, { email, password })
      .then(response => {
        cookie.save("token", response.data.token, { path: "/" });
        dispatch(authenticateUser(response.data.user));
        window.location.href = "/";
      });
  };
};

export const logoutUser = () => {
  return dispatch => {
    cookie.remove("token", { path: "/" });
    dispatch(unauthenticateUser);
    window.location.href = "/";
  };
};
