import passport from 'passport';
import { compose } from 'compose-middleware';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as FacebookStrategy } from 'passport-facebook';

const user = { name: 'Name', id: 1 };

passport.use(new LocalStrategy(
    function (username, password, cb) {
        user.type = 'LocalStrategy';
        cb(null, user);
    })
);

passport.use(new FacebookStrategy(
    {
        clientID: '2097564323799805',
        clientSecret: '16d997d036fb927670b80bc4a0a3eabe',
        callbackURL: 'http://localhost:80/auth/facebook/callback'
    },
    function (accessToken, refreshToken, profile, cb) {
        user.type = 'FacebookStrategy';
        user.profile = profile;
        cb(null, user);
    })
);

passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
    cb(null, user);
}); 

export default compose([
    passport.initialize(),
    passport.session()
]);