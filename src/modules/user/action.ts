import { createAction } from "@reduxjs/toolkit";
import UserRequestVo from "dto/UserRequestVo";
import UserResponsetVo from "dto/UserResponseVo";
export enum FETCH_LOGIN_USER {
  REQUEST = "FETCH_LOGIN_USER_REQUEST",
  SUCCESS = "FETCH_LOGIN_USER_SUCCESS",
  FAIL = "FETCH_LOGIN_USER_FAIL",
}
export const fetchLoginuserRequest = createAction<UserRequestVo>(
  FETCH_LOGIN_USER.REQUEST
);
export const fetchLoginuserSuccess = createAction<UserResponsetVo>(
  FETCH_LOGIN_USER.SUCCESS
);
export const fetchLoginFail = createAction<Error>(FETCH_LOGIN_USER.FAIL);

export const type = {
  FETCH_LOGIN_USER,
};

export const action = {
  fetchLoginuserRequest,
  fetchLoginuserSuccess,
  fetchLoginFail,
};

export default {
  type,
  action,
};
