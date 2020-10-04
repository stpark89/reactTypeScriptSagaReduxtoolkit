import { Button, Container } from "@material-ui/core";
import LoginComponent from "components/login/LoginComponent";
import UserRequestVo, { empty as emptyUserRequest } from "dto/UserRequestVo";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import { action as loginAction } from "../../modules/user/action";

const LoginContainer: FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  const [useUserRequestVo, setUseUserRequestVo] = useState<UserRequestVo>(
    emptyUserRequest
  );

  // 로그인
  const handleChangeLogin = () => {
    dispatch(loginAction.fetchLoginuserRequest(useUserRequestVo));
  };

  return (
    <>
      <LoginComponent
        useUserRequestVo={useUserRequestVo}
        setUseUserRequestVo={setUseUserRequestVo}
      />
      <Button variant="contained" onClick={handleChangeLogin}>
        로그인
      </Button>
    </>
  );
};

export default LoginContainer;
