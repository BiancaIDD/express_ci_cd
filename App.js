import express from 'express';

import cors from 'cors';

import db from './config/database.js';
import router from './routes/routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

app.use(router);



export default app;
