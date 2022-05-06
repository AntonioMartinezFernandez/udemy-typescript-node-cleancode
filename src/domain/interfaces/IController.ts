import { IHttpRequest, IHttpResponse } from './IHttp';

export default interface IController {
  handler: (httpRequest: IHttpRequest) => Promise<IHttpResponse>;
}
