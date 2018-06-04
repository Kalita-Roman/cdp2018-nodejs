import express from 'express';
import cookiesParser from './middlewares/cookiesParser';

const app = express();

app.use(cookiesParser);

app.all('/', (req, res) => res.json(req.parsedCookies));

export default app;