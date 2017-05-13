import { logoutUser } from "./authActions";

export function errorHandler(dispatch, error, type) {
  console.log("Error type:", type);
  console.log(error);

  let errorMessage = error ? error.data.error : error;

  if (error.status === 401 || error.status === 401) {
    errorMessage = "You are not authorized to do this.";
    return dispatch(logoutUser(errorMessage));
  }

  dispatch({
    type,
    payload: errorMessage
  });
}
