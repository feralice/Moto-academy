import express from 'express';
const morgan = require('morgan');


const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use(express.json());

app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
