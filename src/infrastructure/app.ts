import express from 'express';
import middlewares from './config/middlewares';
import routes from './config/routes';
import requestTools from './utils/requestTools';

const app = express();

middlewares(app);

routes(app);

app.get('/', (req: express.Request, res: express.Response) => {
  const ipTools = new requestTools();
  const remoteIP = ipTools.getRequestIpAddress(req);
  console.log(`Request from: ${remoteIP}`);

  res.send('Hello World!');
});

app.post('/', (req: express.Request, res: express.Response) => {
  console.log(req.body);
  res.sendStatus(200);
});

export default app;
