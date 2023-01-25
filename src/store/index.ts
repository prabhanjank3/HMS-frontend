import { configureStore, combineReducers, Action } from "@reduxjs/toolkit";
import ReduxThunk, { ThunkAction } from "redux-thunk";
import logger from "redux-logger";
import user from "./slices/userSlice";

const rootReducer = combineReducers({ user });
const store = configureStore({
  reducer: rootReducer,
  middleware: [ReduxThunk, logger]
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export type RootState = ReturnType<typeof rootReducer>;
export default store;
