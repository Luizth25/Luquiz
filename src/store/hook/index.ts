import {
  TypedUseSelectorHook,
  shallowEqual,
  useDispatch,
  useSelector,
} from "react-redux";

import { AppDispatch, RootState } from "../store";

export const useAppSelector: TypedUseSelectorHook<RootState> = (state) =>
  useSelector(state, { equalityFn: shallowEqual });

export const useAppDispatch: () => AppDispatch = useDispatch;
