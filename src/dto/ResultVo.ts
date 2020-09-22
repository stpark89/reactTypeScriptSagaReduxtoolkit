export interface IResultVo {
  log: string;
  message: string;
  resultCode: number;
}

export default class ResultVo implements IResultVo {
  public log: string;

  public message: string;

  public resultCode: number;
}

export const isSuccess = (result: ResultVo): boolean => result.resultCode === 0;
