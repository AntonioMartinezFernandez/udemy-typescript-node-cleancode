import IController from '../../domain/interfaces/IController';
import { IHttpRequest, IHttpResponse } from '../../domain/interfaces/IHttp';
import { Request, Response } from 'express';

export const RouterAdapter = (controller: IController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: IHttpRequest = {
      body: req.body,
    };

    const httpResponse: IHttpResponse = await controller.handler(httpRequest);

    res.status(httpResponse.statusCode).send(httpResponse.body);
  };
};
