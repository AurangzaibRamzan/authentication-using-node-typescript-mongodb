import mongoose from 'mongoose';

const databaseName = 'authentication';
const mongoOptions = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true };

export default function connectDatabase(): Promise<typeof mongoose> {
  return new Promise((resolve, reject) => {
    mongoose.Promise = global.Promise;
    mongoose.connection.on('error', (err: string) => {
      console.log(`MongoDB connection error: ${err}`);
      reject(err);
    });
    resolve(mongoose.connect(`mongodb://localhost/${databaseName}`, mongoOptions));
  });
}
