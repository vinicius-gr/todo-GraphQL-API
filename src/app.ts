import * as express from 'express';
const mongoose = require('mongoose');

class App {
  public app;

  constructor () {
    this.app = express();
    this.mountRoutes();
    this.connectDB();
  }

  private mountRoutes (): void {
    const router = express.Router();
    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      });
    });
    this.app.use('/', router);
  }

  private connectDB(): void {
    mongoose.connect(
      process.env.MONGODB_URI,
      { useNewUrlParser: true }
    );
  }
}

export default new App().app;
