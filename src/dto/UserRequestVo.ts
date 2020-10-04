export interface IUserRequestVo {
  username: string;
  password: string;
}

export default class UserRequestVo implements IUserRequestVo {
  public username: string;

  public password: string;
}

export const create = ({
  username,
  password,
}: IUserRequestVo): UserRequestVo => {
  const next = new UserRequestVo();
  next.username = username;
  next.password = password;
  return next;
};

export const empty = create({
  username: "",
  password: "",
});
