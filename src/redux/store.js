import { createStore, combineReducers } from "redux";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  // Các reducer khác...
});

const store = createStore(rootReducer);

export default store;
