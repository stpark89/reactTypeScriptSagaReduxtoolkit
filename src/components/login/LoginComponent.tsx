import { TextField } from "@material-ui/core";
import UserRequestVo, {
  empty as emptyUserRequestVo,
  create as createUserRequestVo,
} from "dto/UserRequestVo";
import React, {
  ChangeEvent,
  FunctionComponent,
  useEffect,
  useState,
} from "react";

interface ILoginComponentProps {
  readonly useUserRequestVo: UserRequestVo;
  setUseUserRequestVo: (e: UserRequestVo) => void;
}

const LoginComponent: FunctionComponent<ILoginComponentProps> = ({
  useUserRequestVo,
  setUseUserRequestVo,
}: ILoginComponentProps) => {
  useEffect(() => {}, [useUserRequestVo]);

  return (
    <div>
      <p>로그인 컴포넌트</p>
      <TextField
        value={useUserRequestVo.userId}
        label="아이디"
        onChange={(
          event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) =>
          setUseUserRequestVo(
            createUserRequestVo({
              ...useUserRequestVo,
              userId: event.target.value as string,
            })
          )
        }
      />
      <TextField
        value={useUserRequestVo.userPwd}
        label="비밀번호"
        onChange={(
          event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) =>
          setUseUserRequestVo(
            createUserRequestVo({
              ...useUserRequestVo,
              userPwd: event.target.value as string,
            })
          )
        }
      />
    </div>
  );
};

export default LoginComponent;
