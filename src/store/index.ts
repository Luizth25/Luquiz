import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

import quizReducer from "../store/reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const rootReducer = combineReducers({
  quizDomain: quizReducer,
});

export const store = configureStore({ reducer: rootReducer });

const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;
export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
