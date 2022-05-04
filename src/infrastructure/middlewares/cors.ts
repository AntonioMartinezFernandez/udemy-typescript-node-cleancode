import { Request, Response, NextFunction } from 'express';

export const CORS = (req: Request, res: Response, next: NextFunction): void => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Headers', '*');
  res.set('Access-Control-Allow-Methods', '*');
  res.set('X-Powered-By', 'Antonio Martinez');

  next();
};
