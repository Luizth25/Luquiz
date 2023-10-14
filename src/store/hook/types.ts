import { AnyAction } from "redux";

import { ThunkDispatch } from "redux-thunk";

import { rootReducer } from "../";

export interface IAction<T> {
  readonly type: string;

  readonly payload?: T;
}

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

export type TGetStore = () => RootState;
