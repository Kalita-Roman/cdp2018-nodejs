import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import cookiesParser from 'middlewares/cookiesParser';
import queryParser from 'middlewares/queryParser';
import passportMiddleware from 'middlewares/passportMiddleware';
import router from './routes';

const app = express();

app.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*',
    });
    if ('OPTIONS' === req.method) {
        res.send(200);
    }
    else {
        next();
    }
});
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
app.use(router);

app.all('*', (req, res) => res.status(404).send('404<br>This is a fiasco, bratan!'));

export default app;