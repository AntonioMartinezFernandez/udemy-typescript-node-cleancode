import { Router, Request, Response } from 'express';
import requestTools from '../utils/requestTools';

export default (router: Router) => {
  router.get('/', (req: Request, res: Response) => {
    const ipTools = new requestTools();
    const remoteIP = ipTools.getRequestIpAddress(req);
    console.log(`Request from: ${remoteIP}`);

    res.send('Hello World!');
  });

  router.post('/', (req: Request, res: Response) => {
    console.log(req.body);
    res.sendStatus(200);
  });
};
