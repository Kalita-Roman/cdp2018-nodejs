import express from 'express';
import cookiesParser from './middlewares/cookiesParser';
import queryParser from './middlewares/queryParser';

const app = express();

app.use(cookiesParser);
app.use(queryParser);

app.all('/', (req, res) => res.json(req.parsedCookies));

export default app;