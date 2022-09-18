import { createStore, combineReducers } from "redux";
import serviceFormReducer from "../reducers/serviceFormReducer";
import serviceFilterReducer from "../reducers/serviceFilterReducer";
import serviceListReducer from "../reducers/serviceListReducer";

const reducer = combineReducers({
  serviceForm: serviceFormReducer,
  serviceFilter: serviceFilterReducer,
  serviceList: serviceListReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
