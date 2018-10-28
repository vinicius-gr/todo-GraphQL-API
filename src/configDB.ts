const mongoose = require('mongoose');

export default function connectDB (): void {
  mongoose.connect(
    `mongodb://${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    { useMongoClient: true },
    (err, db) => {
      db ? console.log(`Connected to the database ${db.name}`) : console.log(err);
    }
  );

  mongoose.Promise = global.Promise;
}
