import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "modules";
import { ISampleState } from "./reducer";

export const selectAll = createSelector<
  RootState,
  number,
  boolean,
  Error | null,
  ISampleState
>(
  (state) => state.sample.count,
  (state) => state.sample.pending,
  (state) => state.sample.error,
  (count, pending, error) => ({
    count,
    pending,
    error,
  })
);

export default {
  selectAll,
};
