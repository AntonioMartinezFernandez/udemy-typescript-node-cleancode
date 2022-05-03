import express from 'express';
import routes from './config/routes';
import requestTools from './utils/requestTools';

const app = express();

app.use(express.json());

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

// Routes
routes(app);

export default app;
