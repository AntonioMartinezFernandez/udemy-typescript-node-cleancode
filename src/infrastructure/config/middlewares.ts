import { Express } from 'express';
import { bodyParser, CORS } from '../middlewares/index';

export default (app: Express): void => {
  app.use(bodyParser);
  app.use(CORS);
};
