var passport = require('passport'),
    GitHubStrategy = require('passport-github').Strategy;
var User = require('../models/User');

passport.use(new GitHubStrategy({
        clientID: "fea4999fed618abac75d",
        clientSecret: "76ef79bb73c91a9da963522adc4b9ff1e1758e21",
        callbackURL: "http://localhost:3000/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        console.log(profile);
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
        User.findOrCreate({ eMail: eMail }, { eMail: eMail, name: profile.displayName, useridGitHub: profile.id }, function(err, user) {
            return done(err, user);
        });
    }
));

module.exports = passport;