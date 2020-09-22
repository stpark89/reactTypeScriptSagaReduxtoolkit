import { createReducer } from "@reduxjs/toolkit";
import { createNextState } from "modules/heloer";

export interface IThunkStates {
  pending: boolean;
  error: Error | null;
}

const createInitialState = (): IThunkStates => ({
  pending: false,
  error: null,
});

export const reducer = createReducer(createInitialState(), (builder) =>
  builder.addDefaultCase((state) => createNextState<IThunkStates>(state)({}))
);
