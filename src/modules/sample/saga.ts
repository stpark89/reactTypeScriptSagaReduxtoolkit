import { createNextState } from "./../heloer";
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { runCountFunctionSuccess } from "./action";
import { SagaIterator } from "redux-saga";

import { call, put, takeEvery } from "redux-saga/effects";
import { runCountFunctionFail, runCountFunctionRequest } from "./action";
import Maybe from "true-myth/maybe";
import ResultVo from "dto/ResultVo";

export function* runCountFunction$({
  payload: count,
}: ReturnType<typeof runCountFunctionRequest>): SagaIterator<number> {
  try {
    console.log("request ----- ");
    console.log(count);

    yield put(runCountFunctionSuccess(count));

    return count;
  } catch (err) {
    yield put(runCountFunctionFail(err));
    return 0;
  }
}

export function* watchAddCount$(): SagaIterator {
  yield takeEvery(runCountFunctionRequest, runCountFunction$);
}
