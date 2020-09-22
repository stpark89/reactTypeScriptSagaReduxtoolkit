import { createNextState } from "./../heloer";
import {
  runCountFunctionFail,
  runCountFunctionRequest,
  runCountFunctionSuccess,
} from "./action";
import { createReducer } from "@reduxjs/toolkit";
import Maybe from "true-myth/maybe";

export interface ISampleState {
  count: number;
  pending: boolean;
  error: Error | null;
}

const createInitialState = (): ISampleState => ({
  count: 0,
  pending: false,
  error: null,
});

export const reducer = createReducer(createInitialState(), (builder) =>
  builder
    .addCase(runCountFunctionRequest, (state) =>
      createNextState<ISampleState>(state)({
        pending: true,
        error: null,
      })
    )
    .addCase(runCountFunctionSuccess, (state, { payload: count }) =>
      createNextState<ISampleState>(state)({
        count: count,
        pending: false,
        error: null,
      })
    )
    .addCase(runCountFunctionFail, (state, { payload: error }) =>
      createNextState<ISampleState>(state)({
        pending: false,
        error,
      })
    )
    .addDefaultCase((state) => state)
);
