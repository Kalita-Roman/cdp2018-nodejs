import { Router } from 'express';
import passport from 'passport';
import { auth } from 'middlewares/routes/auth';

const router = new Router();
router.get('/logout',   (req, res) => {
    console.log('logout //TODO: Implement it!');
    res.sendStatus(200);
});
router.post('/local', passport.authenticate('local'), auth);
router.get('/facebook',
    (req, res, next) => {
        console.log('auth/facebook');
        next();
    }, 
    passport.authenticate('facebook'),
);
router.get('/facebook/callback', 
    (req, res, next) => {
        console.log('auth/facebook/callback');
        next();
    },
    passport.authenticate('facebook', {
        successRedirect: '/',
        failureRedirect: '/login'
    }),
    function(req, res) {
        res.redirect('/');
    }
);

export default router;
