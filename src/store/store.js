import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import rootReducer from './slices';
import rootReducer from '../slices/userSlices';
import stateReducer from '../slices/stateSlice';


const combinedReducer = combineReducers({
  user: rootReducer,
  rahul: stateReducer,
});

const store = configureStore({
  reducer: combinedReducer,
});
export default store