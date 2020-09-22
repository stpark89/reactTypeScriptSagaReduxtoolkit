import { createAction } from "@reduxjs/toolkit";
import ResultVo from "dto/ResultVo";

export enum RUN_COUNT_FUNCTION {
  REQUEST = "RUN_COUNT_FUNCTION_REQUEST",
  SUCCESS = "RUN_COUNT_FUNCTION_SUCCESS",
  FAIL = "RUN_COUNT_FUNCTION_FAIL",
}

export const runCountFunctionRequest = createAction<number>(
  RUN_COUNT_FUNCTION.REQUEST
);
export const runCountFunctionSuccess = createAction<number>(
  RUN_COUNT_FUNCTION.SUCCESS
);

export const runCountFunctionFail = createAction<Error>(
  RUN_COUNT_FUNCTION.FAIL
);

export const type = {
  RUN_COUNT_FUNCTION,
};

export const action = {
  runCountFunctionRequest,
  runCountFunctionSuccess,
  runCountFunctionFail,
};

export default {
  type,
  action,
};
