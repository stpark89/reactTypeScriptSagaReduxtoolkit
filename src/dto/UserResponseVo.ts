export interface IUserResponsetVo {
  username: string;
  password: string;
}

export default class UserResponsetVo implements IUserResponsetVo {
  public username: string;
  public password: string;
}

export const create = ({
  username,
  password,
}: IUserResponsetVo): UserResponsetVo => {
  const next = new UserResponsetVo();
  next.username = username;
  next.password = password;
  return next;
};

export const empty = create({
  username: "",
  password: "",
});
