import { combineReducers } from "redux";
import { UserReducer } from "./UserReducer/UserReducer";
import { TaskReducer } from "./TaskReducer/TaskReducer";

const rootReducer = combineReducers({
  UserReducer: UserReducer,
  TaskReducer: TaskReducer,
});

export default rootReducer;
