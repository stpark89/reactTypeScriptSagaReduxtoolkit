import UserResponsetVo, {
  empty as emptyUserResponseVo,
} from "dto/UserResponseVo";
import { signIn } from "./../../api/user";
import api from "api";
import {
  runCountFunctionSuccess,
  runCountFunctionFail,
} from "modules/sample/action";
import { SagaIterator } from "redux-saga";
import { call, put, takeEvery } from "redux-saga/effects";
import { PromiseValue } from "type-fest";
import { fetchLoginuserRequest, fetchLoginuserSuccess } from "./action";

export function* fetchLoginuserFunction$({
  payload: requestVo,
}: ReturnType<typeof fetchLoginuserRequest>): SagaIterator<UserResponsetVo> {
  try {
    const isLogin: PromiseValue<ReturnType<
      typeof api.user.signIn
    >> = yield call(api.user.signIn, requestVo);

    yield put(fetchLoginuserSuccess(isLogin));
    return isLogin;
  } catch (err) {
    yield put(runCountFunctionFail(err));
    return emptyUserResponseVo;
  }
}

export function* watchUserInfo$(): SagaIterator {
  yield takeEvery(fetchLoginuserRequest, fetchLoginuserFunction$);
}
