import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import cookiesParser from 'middlewares/cookiesParser';
import queryParser from 'middlewares/queryParser';
import allowCors from 'middlewares/allowCors';
import passportMiddleware from 'middlewares/passportMiddleware';
import swaggerDocMiddleware from 'middlewares/swaggerDocMiddleware';
import swaggerApiMiddleware from 'middlewares/swaggerApiMiddleware';
import router from './routes';

const app = express();

app.use(allowCors);
app.use(cookiesParser);
app.use(queryParser);
app.use(session({ 
    secret: 'key',
    cookie: {
        httpOnly: false,
    },
    resave: false,
    saveUninitialized: false
}));
app.use(bodyParser.json());
app.use(passportMiddleware);
app.use('/swagger', swaggerApiMiddleware);
app.use('/help', swaggerDocMiddleware);
app.use(router);

app.all('*', (req, res) => res.status(404).send('404<br>This is a fiasco, bratan!'));

export default app;