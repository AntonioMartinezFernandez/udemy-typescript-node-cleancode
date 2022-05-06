import { IHttpResponse } from '../interfaces/IHttp';
import { ServerError } from '../errors/ServerError';

export const serverError = (error: any): IHttpResponse => {
  return {
    statusCode: 500,
    error: new ServerError(error.stack),
  };
};

export const success = (data: any): IHttpResponse => {
  return {
    statusCode: 200,
    body: data,
  };
};
