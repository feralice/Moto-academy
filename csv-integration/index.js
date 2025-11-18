import express from 'express';
import router from './routes.js';
import { loadData } from './services/load-data.js';
const port = 3000;

const app = express();
app.use(express.json());

app.use('/api', router);

app.listen(port, () => {
  loadData();
  console.log(`Example app listening on port ${port} and loading data...`);
});
