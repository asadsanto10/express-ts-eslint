import mongoose from 'mongoose';

const connect = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/testMongoose');
    console.log('Database connection established');
  } catch (error: unknown) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    console.log(`Database connection: ${error}`);
  }
};

export default connect;
