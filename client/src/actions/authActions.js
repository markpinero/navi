import * as types from "./actionTypes";
import { errorHandler } from "./";
import axios from "axios";
import cookie from "react-cookie";

const CLIENT_ROOT_URL = "http://localhost:3000";

export function authenticateUser(user) {
  return { type: types.AUTHENTICATE_USER, user };
}

export function unauthenticateUser(user) {
  return { type: types.UNAUTHENTICATE_USER, user };
}

export const registerUser = data => {
  return dispatch => {
    axios
      .post("/api/auth/register", data)
      .then(response => {
        console.log(response);
        cookie.save("token", response.data.token, { path: "/" });
        dispatch(authenticateUser(response.data.user));
        window.location.href = `${CLIENT_ROOT_URL}/`;
      })
      .catch(error => {
        errorHandler(dispatch, error.response, types.AUTH_ERROR);
      });
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    axios.post("/api/auth/login", { email, password }).then(response => {
      cookie.save("token", response.data.token, { path: "/" });
      dispatch(authenticateUser(response.data.user));
      window.location.href = `${CLIENT_ROOT_URL}`;
    });
  };
};

export const logoutUser = () => {
  return dispatch => {
    console.log("logout action");
    cookie.remove("token", { path: "/" });
    dispatch(unauthenticateUser);
    window.location.href = `${CLIENT_ROOT_URL}`;
  };
};
