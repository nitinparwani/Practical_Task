//Set all reducer and push them in combine reducers.
import { combineReducers } from "redux";
import ServicesReducer from "./ServicesReducer";
const rootReducer = combineReducers({
  ServicesReducer:ServicesReducer
});

export default rootReducer;
