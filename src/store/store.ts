import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { quizReducer } from "./slice";

const combineReducer = combineReducers({
  quizDomain: quizReducer,
});

export const store = configureStore({
  reducer: (state, action) => combineReducer(state, action),
});

export type RootState = ReturnType<typeof combineReducer>;
export type AppDispatch = typeof store.dispatch;
