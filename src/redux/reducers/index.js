import { combineReducers } from "redux";
import task from "./taskReducer";

const rootReducer = combineReducers({
  task: task,
});

export default rootReducer;
