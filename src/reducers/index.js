import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import comments from "./comments";

export default combineReducers({
  routing: routerReducer,
  comments
});