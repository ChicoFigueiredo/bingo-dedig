var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/User');

passport.use(new GoogleStrategy({
        clientID: "954700325718-rr3jab9sb3hf6hnpe38uak881rmgimg6.apps.googleusercontent.com",
        clientSecret: "R7BZl36s9vZLEG_Mai8aHS3e",
        callbackURL: "http://localhost:3000/auth/google/callback",
        passReqToCallback: true
    },
    function(request, accessToken, refreshToken, profile, done) {
        let eMail = '';
        if (profile.emails) {
            if (profile.emails[0].value) {
                eMail = profile.emails[0].value;
            } else {
                eMail = profile.id;
            }
        } else {
            eMail = profile.id;
        }
        User.findOrCreate({ eMail: eMail }, { eMail: eMail, name: profile.displayName, useridGoogle: profile.id }, function(err, user) {
            return done(err, user);
        });
    }
));

module.exports = passport;