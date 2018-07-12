import passport from 'passport';
import { compose } from 'compose-middleware';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { Strategy as TwitterStrategy } from 'passport-twitter';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';

const user = { name: 'Name', id: 1 };
const createCallbackUrl = strategy => `http://localhost:80/auth/${strategy}/callback`;
const createVerifyCallback = (typeName) => (accessToken, secretToken, profile, cb) => {
    user.type = typeName;
    user.profile = profile;
    cb(null, user);
};

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
        callbackURL: createCallbackUrl('facebook')
    },
    createVerifyCallback('FacebookStrategy')
));

passport.use(new TwitterStrategy(
    {
        consumerKey: 'ey06nuOpFXPP9RHIyhxzEGJtA',
        consumerSecret: 'gRqGPjLtS45nK4xWRukWYIfEhP0jgXndBcMSLSTf1XHZBh3FWs',
        callbackURL: createCallbackUrl('twitter')
    },
    createVerifyCallback('TwitterStrategy')
));

passport.use(new GoogleStrategy(
    {
        clientID: '657673204973-8gf45u9q4fuuq78tgj2h9mlj9v0ke2u9.apps.googleusercontent.com',
        clientSecret: 'btHCzQ_6QgtzesmJFDFIxShJ',
        callbackURL: createCallbackUrl('google')
    },
    createVerifyCallback('GoogleStrategy')
));

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