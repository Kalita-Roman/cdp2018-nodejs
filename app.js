import express from 'express';

const app = express();

app.all('/', (req, res) => res.send('Hello World!'));

export default app;