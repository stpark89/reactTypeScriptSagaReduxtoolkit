import { isOk } from "./../models/HttpResponseStatus";
import UserRequestVo from "dto/UserRequestVo";
import UserResponsetVo, { create as createUser } from "dto/UserResponseVo";
import axios from "./axios";

export const signIn = async (
  requestVo: UserRequestVo
): Promise<UserResponsetVo> => {
  const response = await axios().post<UserResponsetVo>(
    "/api/sign-in",
    requestVo
  );

  debugger;

  if (!isOk(response.status)) {
    throw new Error("Error 발생");
  }

  const result = response.data;
  return createUser({
    ...result,
  });
};

export default {
  signIn,
};
