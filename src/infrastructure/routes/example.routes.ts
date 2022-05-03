import { Request, Response, Router } from 'express';

export default (router: Router): void => {
  router.post('/example', (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  router.get('/example', (req, res) => {
    res.status(200).json({ foo: 'bar' });
  });
};
