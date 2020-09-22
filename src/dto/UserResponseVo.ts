export interface IUserResponsetVo {
  userId: string;
  roleId: string;
  enumRoleId: string[];
  primaryEmail: string;
  signInAt: string;
  expireAt: string;
}

export default class UserResponsetVo implements IUserResponsetVo {
  public userId: string;

  public roleId: string;

  public enumRoleId: string[];

  public primaryEmail: string;

  public signInAt: string;

  public expireAt: string;
}

export const create = ({
  userId,
  roleId,
  enumRoleId,
  primaryEmail,
  signInAt,
  expireAt,
}: IUserResponsetVo): UserResponsetVo => {
  const next = new UserResponsetVo();
  next.userId = userId;
  next.roleId = roleId;
  next.enumRoleId = enumRoleId;
  next.primaryEmail = primaryEmail;
  next.signInAt = signInAt;
  next.expireAt = expireAt;
  return next;
};

export const empty = create({
  userId: "",
  roleId: "",
  enumRoleId: [],
  primaryEmail: "",
  signInAt: "",
  expireAt: "",
});
