import { watchAddCount$ } from "modules/sample/saga";
import { watchUserInfo$ } from "modules/user/saga";
import { all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([
    // 샘플
    watchAddCount$(),

    // 유저
    watchUserInfo$(),
  ]);
}

export default rootSaga;
