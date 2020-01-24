import express from 'express';

import Routes from './routes';
import Database from './utils/database';

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

Database();

app.use('/', Routes);

app.listen(port, () => {
  console.log('Example app listening on port 3000!');
});
