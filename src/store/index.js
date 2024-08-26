import { combineReducers } from 'redux';
// import userReducer from './userSlice';
import userReducer from '../slices/userSlices';
import stateReducer from "../slices/stateSlice"

const rootReducer = combineReducers({
  users: userReducer,
  rahul : stateReducer
  // other reducers can be added here
});

export default rootReducer;