export namespace HttpError {

  export class HttpBadRequestError extends Error {name = 'HttpBadRequestError';}

  export class HttpUnauthorizedError extends Error {name = 'HttpUnauthorizedError';}

  export class HttpForbiddenError extends Error {name = 'HttpForbiddenError';}

  export class HttpNotFoundError extends Error {name = 'HttpNotFoundError';}

  export class HttpInternalServerError extends Error {name = 'HttpInternalServerError';}

  export class HttpNotImplementedError extends Error {name = 'HttpNotImplementedError';}

  export class HttpBadGatewayError extends Error {name = 'HttpBadGatewayError';}

  export class HttpServiceUnavailableError extends Error {name = 'HttpServiceUnavailableError';}

  const errors: Map<number, ErrorConstructor> = new Map();
  errors.set(400, HttpError.HttpBadRequestError as ErrorConstructor);
  errors.set(401, HttpError.HttpUnauthorizedError as ErrorConstructor);
  errors.set(403, HttpError.HttpForbiddenError as ErrorConstructor);
  errors.set(404, HttpError.HttpNotFoundError as ErrorConstructor);
  errors.set(500, HttpError.HttpInternalServerError as ErrorConstructor);
  errors.set(501, HttpError.HttpNotImplementedError as ErrorConstructor);
  errors.set(502, HttpError.HttpBadGatewayError as ErrorConstructor);
  errors.set(503, HttpError.HttpServiceUnavailableError as ErrorConstructor);

  export const knowsStatus = (status: number): boolean => errors.has(status);
  export const getError = (status: number): ErrorConstructor | undefined => errors.get(status);

}

export const handleResponseErrors = ({ status }: Response) => {
  if (status >= 400 && HttpError.knowsStatus(status)) {
    const error = HttpError.getError(status);
    throw new error();
  }
};
