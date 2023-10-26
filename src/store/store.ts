import { configureStore } from "@reduxjs/toolkit";
import { quizReducer } from "./slice";

export const store = configureStore({
  reducer: {
    quizDomain: quizReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
