// index.js

import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/dev-a', (req, res) => {
  res.send('Hello from Developer A');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});