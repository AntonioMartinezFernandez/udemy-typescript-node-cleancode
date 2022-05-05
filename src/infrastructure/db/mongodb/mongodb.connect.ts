import mongoose from 'mongoose';

export default (): void => {
  const mongoUrl =
    process.env.MONGODB ||
    'mongodb://mongouser:mongopassword@localhost:27017/udemycleancode';

  mongoose.connect(mongoUrl, { dbName: 'udemycleancode' }, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('MongoDB connected');
    }
  });
};
