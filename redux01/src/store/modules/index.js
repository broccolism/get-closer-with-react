import { combineReducers } from "redux";
import counterReducer from "./counter";
import waiting from "./waiting";

export default combineReducers({ counterReducer, waiting });
