export enum HttpResponseStatus {
  Unknown = 0,
  Continue = 100,
  SwitchingProtocol = 101,
  Processing = 102,
  EarlyHint = 103,
  Ok = 200,
  Created = 201,
  NoContent = 204,
  ResetContent = 205,
  MultipleChoices = 300,
  MovedPermernently = 301,
  Found = 302,
  NotModified = 304,
  TemporaryRedirect = 307,
  PermernentlyRedirect = 308,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  NotAcceptable = 406,
  RequestTimeOut = 408,
  Conflict = 409,
  Gone = 410,
  PayloadTooLarge = 413,
  UriTooLong = 414,
  UnsupportedMediaType = 415,
  UnprocessableEntity = 422,
  UpgradeRequired = 426,
  TooManyRequest = 429,
  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavilable = 503,
  GatewayTimeout = 504,
  HttpVersionNotSupported = 505,
}

export const convert = (value: number): HttpResponseStatus =>
  [
    HttpResponseStatus.Unknown,
    HttpResponseStatus.Continue,
    HttpResponseStatus.SwitchingProtocol,
    HttpResponseStatus.Processing,
    HttpResponseStatus.EarlyHint,
    HttpResponseStatus.Ok,
    HttpResponseStatus.Created,
    HttpResponseStatus.NoContent,
    HttpResponseStatus.MovedPermernently,
    HttpResponseStatus.Found,
    HttpResponseStatus.NotModified,
    HttpResponseStatus.TemporaryRedirect,
    HttpResponseStatus.PermernentlyRedirect,
    HttpResponseStatus.BadRequest,
    HttpResponseStatus.Unauthorized,
    HttpResponseStatus.Forbidden,
    HttpResponseStatus.NotFound,
    HttpResponseStatus.MethodNotAllowed,
    HttpResponseStatus.NotAcceptable,
    HttpResponseStatus.RequestTimeOut,
    HttpResponseStatus.Conflict,
    HttpResponseStatus.Gone,
    HttpResponseStatus.PayloadTooLarge,
    HttpResponseStatus.UriTooLong,
    HttpResponseStatus.UnsupportedMediaType,
    HttpResponseStatus.UnprocessableEntity,
    HttpResponseStatus.UpgradeRequired,
    HttpResponseStatus.TooManyRequest,
    HttpResponseStatus.InternalServerError,
    HttpResponseStatus.NotImplemented,
    HttpResponseStatus.BadGateway,
    HttpResponseStatus.ServiceUnavilable,
    HttpResponseStatus.GatewayTimeout,
    HttpResponseStatus.HttpVersionNotSupported,
  ].find((e) => e === value) || HttpResponseStatus.Unknown;

export const isOk = (
  status: number | HttpResponseStatus,
  allowEmptyBody = true
): boolean => {
  if (allowEmptyBody) {
    return (
      status >= HttpResponseStatus.Ok &&
      status < HttpResponseStatus.MultipleChoices
    );
  }

  if (status === HttpResponseStatus.Unauthorized) {
    document.location.replace(
      `/landing?status=${HttpResponseStatus.Unauthorized}`
    );
    return true;
  }
  return (
    status >= HttpResponseStatus.Ok &&
    status < HttpResponseStatus.MultipleChoices &&
    status !== HttpResponseStatus.NoContent &&
    status !== HttpResponseStatus.ResetContent
  );
};
