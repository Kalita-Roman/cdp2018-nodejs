import { Router } from 'express';
import passport from 'passport';
import { auth } from 'middlewares/routes/auth';
import { createLogMiddleware } from 'middlewares/logger';

const router = new Router();

const createProviderAuthRoute = (providerName, authOptions) => {
    const providerRouter = new Router();
    providerRouter.get('/',
        createLogMiddleware(`auth/${providerName}`),
        passport.authenticate(providerName, authOptions),
    );
    providerRouter.get('/callback',
        createLogMiddleware(`auth/${providerName}/callback`),
        passport.authenticate(providerName,  {
            successRedirect: '/',
            failureRedirect: '/login',
        }),
        (req, res) => res.redirect('/')
    );
    return providerRouter;
};

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});
router.post('/local', passport.authenticate('local'), auth);
router.use('/facebook', createProviderAuthRoute('facebook'));
router.use('/twitter', createProviderAuthRoute('twitter'));
router.use('/google', createProviderAuthRoute('google', 
    { scope: ['https://www.googleapis.com/auth/plus.login'] }
));

export default router;
