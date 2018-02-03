const express = require ('express');
const passport = require('passport');
const MicrosoftStrategy = require('passport-microsoft').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const googleKeys = require('./config/googleKey')
var rp = require('request-promise');

const app = express();
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function (user, done) {
  done(null, user.profile.id);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(new GoogleStrategy({
  clientID: googleKeys.googleClientID,
  clientSecret: googleKeys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  let user = {};
    user.accessToken = accessToken;
    user.profile = profile;
    return done(null, user);
    // console.log(accessToken);
}));

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile','email']
}));

app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
        res.json(req.user);
});

const port = 5000;
app.listen(port, () => {
  console.log('listening on port: ', port);
} );
