import { legacy_createStore as createStore } from 'redux';
import AllReducers from "./reducers/index";
const store = createStore(
    AllReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
export default store