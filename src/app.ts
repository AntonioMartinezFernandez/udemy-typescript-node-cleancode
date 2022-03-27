import Express from 'express';
import cron from 'node-cron';

cron.schedule('0,30 * * * * *', () => {
  console.log('Cronjob running every 30 seconds');
});

const app = Express();

app.get('/', (req: Express.Request, res: Express.Response) => {
  res.send('Hi!');
});

app.listen(3000, () => {
  console.log('Server listen on port 3000');
});
