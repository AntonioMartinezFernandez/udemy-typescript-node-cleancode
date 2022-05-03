import { Request, Response, Router } from 'express';

export default (router: Router): void => {
  router.post('/register-vehicle', (req: Request, res: Response) => {
    res.sendStatus(200);
  });
};
