import DataReducer from "./DataReducer";
 
import { combineReducers } from "redux";
 
const AllReducers = combineReducers({
    DataReducer: DataReducer,
});

export default AllReducers;