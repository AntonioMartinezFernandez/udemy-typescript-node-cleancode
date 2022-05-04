import 'dotenv/config';

import app from './infrastructure/app';
import cron from 'node-cron';

cron.schedule('0 * * * * *', () => {
  console.log('Cronjob running every 60 seconds');
});

app.listen(process.env.PORT, () => {
  console.log(`Server listen on port ${process.env.PORT}`);
});
