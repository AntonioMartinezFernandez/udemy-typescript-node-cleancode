import 'dotenv/config';

import app from './infrastructure/app';
import ConnectMongoDB from './infrastructure/db/mongodb/mongodb.connect';
import cron from 'node-cron';

cron.schedule('0 * * * * *', () => {
  console.log('Cronjob running every 60 seconds');
});

app.listen(process.env.PORT, () => {
  ConnectMongoDB();
  console.log(`Server listen on port ${process.env.PORT}`);
});
