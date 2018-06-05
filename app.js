import express from 'express';
import bodyParser from 'body-parser';
import cookiesParser from './middlewares/cookiesParser';
import queryParser from './middlewares/queryParser';
import router from './routes';

const app = express();

app.use(cookiesParser);
app.use(queryParser);
app.use(bodyParser.json());

app.use(router);

app.all('*', (req, res) => res.status(404).send('404<br>This is a fiasco, bratan!'));

export default app;