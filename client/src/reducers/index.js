import { combineReducers } from "redux";
import auth from "./authReducer";
import api from "./apiReducer";
import ui from "./uiReducer";

const rootReducer = combineReducers({
  auth,
  api,
  ui
});

export default rootReducer;
