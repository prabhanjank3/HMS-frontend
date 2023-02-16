import { configureStore, combineReducers, Action, getDefaultMiddleware } from "@reduxjs/toolkit";
import ReduxThunk, { ThunkAction } from "redux-thunk";
import logger from 'redux-logger';
import user from "./slices/userSlice";
import opd from './slices/opdSlices';
import utils from './slices/componentSlice';
import patient from './slices/patientSlice';

const rootReducer = combineReducers({ user,opd, utils, patient });
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ReduxThunk,logger) 
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export type RootState = ReturnType<typeof rootReducer>;
export default store;
