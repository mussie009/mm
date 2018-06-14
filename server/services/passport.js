const passport = require('passport');
const microsoftStrategy = require('passport-microsoft').Strategy;
const keys = require('../config/keys');
//var rp = require('request-promise');

passport.serializeUser(function (user, done) {
  done(null, user.profile.id);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(new microsoftStrategy({
  clientID: keys.microsoftClientID,
  clientSecret: keys.microsoftClientSecret,
  callbackURL: '/auth/microsoft/callback'
}, (accessToken, refreshToken, profile, done) => {
      let user = {};
      user.accessToken = accessToken;
      user.profile = profile;
      return done(null, user);

    //  console.log(accessToken);
}));
