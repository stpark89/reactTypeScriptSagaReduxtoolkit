import { createNextState } from "./../heloer";
import { createReducer } from "@reduxjs/toolkit";
import UserResponsetVo, { empty as emptyUserInfo } from "dto/UserResponseVo";
import {
  fetchLoginFail,
  fetchLoginuserRequest,
  fetchLoginuserSuccess,
} from "./action";
import { stringify } from "querystring";

export interface IUserState {
  mochung: UserResponsetVo;
  pending: boolean;
  error: Error | null;
}

const createInitialState = (): IUserState => ({
  mochung: emptyUserInfo,
  pending: false,
  error: null,
});

export const reducer = createReducer(createInitialState(), (builder) =>
  builder
    .addCase(fetchLoginuserRequest, (state) =>
      createNextState<IUserState>(state)({
        pending: true,
        error: null,
      })
    )
    .addCase(fetchLoginuserSuccess, (state, { payload: responseVo }) =>
      createNextState<IUserState>(state)({
        pending: false,
        error: null,
        mochung: responseVo,
      })
    )
    .addCase(fetchLoginFail, (state, { payload: error }) =>
      createNextState<IUserState>(state)({
        pending: false,
        error,
      })
    )
    .addDefaultCase((state: IUserState) => state as IUserState)
);

export default reducer;
