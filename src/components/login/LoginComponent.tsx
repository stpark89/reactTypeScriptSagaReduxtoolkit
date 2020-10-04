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
  const [as, setas] = useState<UserRequestVo>(emptyUserRequestVo);

  useEffect(() => {
    setas(createUserRequestVo({ ...useUserRequestVo }));
  }, [useUserRequestVo]);

  return (
    <div>
      <p>로그인 컴포넌트</p>
      <TextField
        value={useUserRequestVo.username}
        label="아이디"
        onChange={(
          event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) =>
          setUseUserRequestVo(
            createUserRequestVo({
              ...useUserRequestVo,
              username: event.target.value as string,
            })
          )
        }
      />
      <TextField
        value={useUserRequestVo.password}
        label="비밀번호"
        onChange={(
          event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) =>
          setUseUserRequestVo(
            createUserRequestVo({
              ...useUserRequestVo,
              password: event.target.value as string,
            })
          )
        }
      />
    </div>
  );
};

export default LoginComponent;
