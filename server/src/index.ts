import express, { Express } from 'express';
import process from 'process';
import mongoose from 'mongoose';
import bicycleRouter from './bicycleRouter';

const app: Express = express();
const PORT = process.env.PORT || 3000;
const MONGO_DB_URL = 'mongodb+srv://evgminukova6:Vgmvk3DwmsDonoUi@cluster0.ed7ekn6.mongodb.net/';

app.use(express.json());
app.use('/bicycle', bicycleRouter);

async function initApp() {
  try {
    await mongoose.connect(MONGO_DB_URL);

    const server = app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });

    process.on('SIGINT', () => {
      server.close(() => process.exit());
    });
  } catch (error) {
    console.log(error);
  }
}

initApp();
